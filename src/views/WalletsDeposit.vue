<template>
    <div class="wallets-deposit page-container">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/deposit.png" alt="">
            Deposit {{ $route.params.coin }} 
        </h2>

        <div class="card large">
            <div class="card__header mb-4">
                <router-link to="/wallets" class="fw-bold flex items-center">
                    <img src="../assets/icons/caret.png" class="icon mr-2" width="8" alt="">
                    Go back
                </router-link>

                <CoinBalance></CoinBalance>
            </div>

            <div class="card__body">
                <div class="row">
                    <div class="col-md-3">
                        <p>Please scan this QR code: </p>
                        <img :src="qr_code" v-if="qr_code" width="100%" alt="">
                        <vue-content-loading :width="300" :height="300" v-else>
                            <rect x="0" y="0" rx="4" ry="4" width="300" height="300" />
                        </vue-content-loading>
                    </div>

                    <div class="col-md-8">
                        <p>Or send funds to the address provided below:</p>

                        <div class="form-control large">
                            <input ref="inputAddress" v-if="address" type="text" :value="address">
                            <span v-else>Loading...</span>
                            <div class="input__append" @click="copy">
                                <img src="../assets/icons/copy.png" alt="" class="icon" width="14">
                                {{ copyLabel }}
                            </div>
                        </div>

                        <h6 class="text-green flex items-center mt-5">
                            <img src="../assets/icons/alert.png" class="icon mr-2" width="17" alt="">
                            Important:
                        </h6>

                        <ul class="pl-3">
                            <li class="mb-3">Send only amount in BTC to this deposit address</li>
                            <li>Sending any other currency to this address may result in the loss of your deposit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import wallet from '@/mixins/wallet'
import CoinBalance from '@/components/CoinBalance'

export default {
    name: 'WalletsDeposit',
    components: { CoinBalance },
    mixins : [ wallet ],
    data() {
        return {
            qr_code : '',
            address : '',
            copyLabel : 'Copy'
        }
    },
    watch: { 
        coins() {
            this.setActiveCoin(this.$route.params.coin)
            this.startDeposit()
        }
    },  
    methods: { 
        async startDeposit(){
            const { qrcode_url, address } = await api.get(`wallets/deposit/${this.activeCoin.id}`)
            this.qr_code = qrcode_url
            this.address = address
        },
        copy() {
            let { inputAddress } = this.$refs
            inputAddress.select();
            inputAddress.setSelectionRange(0, 99999); 
            document.execCommand("copy");

            this.copyLabel = 'Copied!'
            setTimeout(() => { this.copyLabel = 'Copy' }, 1000)
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .wallets-deposit {
        width: 100%;

        .form-control.large { 
            max-width: none;
            border-radius: 20px;
            border-color: #979797;
            margin-top: 15px;

            input {
                width: calc(100% - 100px);
                max-width: none;
                font-size: 18px;
            }

            .input__append { margin-top: 3px; }
        }
    }
</style>
