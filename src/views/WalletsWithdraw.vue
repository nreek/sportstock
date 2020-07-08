<template>
    <div class="wallets-deposit page-container">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/deposit.png" alt="">
            Withdraw {{ $route.params.coin }}  
        </h2>

        <div class="card large">
            <div class="card__header">
                <router-link to="/wallets" class="fw-bold">
                    <img src="../assets/icons/caret.png" class="icon" width="8" alt="">
                    Go back
                </router-link>

                <CoinBalance></CoinBalance>
            </div>

            <div class="row card__body">
                <div class="col-md-12 mt-4 mb-4">
                    <CoinAlert>
                        <p><strong>Atenção!</strong> Tenha cuidado ao realizar transferências BTC. Transações não podem ser canceladas.</p>

                        <router-link to="check-limits">Check Limits</router-link>
                    </CoinAlert>
                </div>
                <div class="col-md-6">
                    <div class="form-group vertical">
                        <label for="">Destination BTC Wallet:</label>
                        <input type="text" class="form-control" autocomplete="off" name="wallet_address" @blur="createWithdrawRequest(); getFee()" v-model="form.address">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group vertical">
                        <label for="">Amount: </label>
                        <div class="form-control">
                            <div class="pull-left f-direction-row-reverse">
                                <input type="text" name="amount" style="width:160px" @blur="createWithdrawRequest(); getFee()" v-model="form.amount"> 
                                <span class="text-secondary-light">{{ $route.params.coin }}</span>
                            </div>
                            <div class="input__append">
                                <a href="javascript:void(0);" class="text-secondary-light" @click="useTotalAvailable">Use total available</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group vertical">
                        <label for="">Fee:</label>
                        <input type="text" disabled class="form-control" name="fee" :value="fee">
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group vertical">
                        <label for="">Total + Fee:</label>
                        <input type="text" disabled class="form-control" :value="total_fee">
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group vertical">
                        <label for="">PIN Transaction:</label>
                        <input type="password" name="pin" v-model="form.pin" @blur="createWithdrawRequest" class="form-control">
                    </div>
                </div>

                <div class="col-md-12">
                    <a href="#" class="btn btn-block btn-secondary">Withdraw</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import CoinBalance from '@/components/CoinBalance'
import wallet from '@/mixins/wallet'

export default {
    name: 'WalletsDeposit',
    components: { CoinBalance },
    mixins : [ wallet ],
    data() {
        return {
            fee : 0,
            form : { 
                address : '',
                amount : 0,
                pin : '',
            }
        }
    },
    // watch: { 
    //     form : {
    //         handler: 'getFee',
    //         deep: true
    //     },
    // },
    computed: { 
        total_fee() {
            return this.fee + parseFloat(this.form.amount)
        } 
    },
    methods : {
        async getFee(){
            if(this.form.address && this.form.amount) {
                const { fee } = await api.get(`wallets/withdraw/fee/${this.activeCoin.id}/${this.form.address}/${this.form.amount}`)
                this.fee = parseFloat(fee)
            }
        },
        async createWithdrawRequest() {
            let valid = true;

            Object.keys(this.form).map( k => {
                if(this.form[k] == '') {
                    valid = false;
                }
            })

            if(valid) {
                const response = await api.post('wallets/withdraw', { 
                    currency : this.activeCoin.id,
                    amount : this.form.amount,
                    pin : this.form.pin
                })

                console.log(response)
            }
        },
        useTotalAvailable() {
            const { balance } = this.activeCoin
            this.form.amount = balance.length ? balance[0].balance : 0
            this.createWithdrawRequest()
            this.getFee()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .wallets-deposit {
        
    }
</style>
