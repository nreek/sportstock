<template>
    <div class="exchange page-container">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/exchange.png" class="icon" alt="">
            Simple Exchange
        </h2>

        <div class="card large">
            <div class="card__header">
                <router-link to="/wallets" class="fw-bold">
                    <img src="../assets/icons/caret.png" class="icon" width="8" alt="">
                    Go back
                </router-link>

                <div class="coin-rate" v-if="form.origin && form.destiny && price">
                    <span>Rate: </span>
                    <strong> 1 {{ form.origin.name }} = {{ price }} {{ form.destiny.name }}</strong>
                </div>
            </div>

            <div class="row card__body">
                <div class="col-md-12 mt-4 mb-4">
                    <CoinAlert>
                        <p><strong>Atenção!</strong> Tenha cuidado ao realizar uma conversão. Elas não poderão ser canceladas.</p>
                    </CoinAlert>
                </div>
                <div class="col-md-4">
                    <div class="form-group vertical">
                        <label for="">From Currency:</label>
                        <CoinsList @change="(value) => form.origin = value" :value="form.origin" placeholder="Select Icon"></CoinsList>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group vertical">
                        <label for="">To Currency:</label>
                        <CoinsList @change="(value) => form.destiny = value" :value="form.destiny" placeholder="Select Icon"></CoinsList>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group vertical">
                        <label for="">How many coins do you want to buy?</label>
                        <div class="form-control">
                            <div class="pull-left f-direction-row-reverse">
                                <input type="text" v-model="form.amount"> 
                                <span class="text-secondary-light" v-if="form.destiny">{{ form.destiny.name }}</span>
                            </div>
                            <div class="input__append" v-if="form.destiny">
                                <a href="javascript:void(0);" @click="form.amount = form.destiny.balance.length ? form.destiny.balance[0].balance : 0" class="btn btn-sm btn-success">Use total available</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="form-group vertical">
                        <label for="">Will Receive: </label>
                        <input type="text" class="form-control" disabled :value="will_receive">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group vertical">
                        <label for="">Average Price: </label>
                        <input type="text" class="form-control" disabled :value="price">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group vertical">
                        <label for="">Total Fee: </label>
                        <input type="text" class="form-control" disabled :value="fee">
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="form-group vertical">
                        <label for="">PIN Transaction:</label>
                        <input type="password" class="form-control">
                    </div>
                </div>

                <div class="col-md-12">
                    <a href="#" class="btn btn-block btn-secondary">Exchange Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import coins from '@/mixins/coins'

import CoinsList from '@/components/CoinsList'

export default {
    name: 'Exchange',
    components: { CoinsList },
    mixins: [ coins ],
    data() {
        return {
            form : {
                origin : false,
                destiny : false,
                amount : 0,
            },
            price : 0,
            fee : 0,
            will_receive : 0,
            rate : ''
        }
    }, 
    watch : {
        'form.origin' : 'getBasePriceAndFee',
        'form.destiny' : 'getBasePriceAndFee',
        'form.amount' : 'getBasePriceAndFee',
        coins () {
            if(this.$route.params.coin) {
                this.form.origin = this.coins.find( coin => coin.name == this.$route.params.coin )
            }
        }
    },
    methods : {
        async getBasePriceAndFee(){
            const { origin, destiny, amount } = this.form;

            if( origin && destiny) {
                const { price } = await api.get(`wallets/exchange/price/${origin.id}/${destiny.id}`)
                this.price = price

                if( amount ) {
                    const response = await api.get(`wallets/exchange/fee/${origin.id}/${destiny.id}/${amount}`)
                    this.fee = response.price
                    console.log(`${this.form.amount} * ${this.price} - ${this.fee}`)
                    this.will_receive = this.form.amount * this.price - this.fee
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .exchange {
        .coin-rate {
            font-size: 14px;
            display: flex;
            align-items: center;

            @include mobile{
                flex-direction: column;
                margin-top: 12px;
                border: 1px solid rgba(107, 74, 143, 0.21);
                border-radius: 5px;
                padding: 11px;
            }

            img {
                width: 15px;
                margin-right: 7px;
            }
        }
    }
</style>
