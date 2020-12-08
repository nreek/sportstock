<template>
    <div class="row">
        <div class="col-md-12">
            <h2 class="page-title mb-4 flex justify-between">
                <div class="flex items-center text-bold">
                    <img src="../assets/icons/document.png" class="icon" alt="" style="width: 20px">
                    General Report
                </div>

                <a href="javascript:void(0)" class="flex items-center fz-16 outline-none" @click="loadData">
                    <img src="../assets/icons/refresh.png" class="icon" alt="" style="width: 20px">
                    Reload Data
                </a>
            </h2>
        </div>
        <div class="col-md-4 card-info__wrapper mb-4 md:mb-0">
            <div class="card card-info">
                <div class="flex justify-between items-center">
                    <img src="../assets/icons/house.png" width="28" alt="">
                    <!-- <span class="pill pill-green"> 3% ▲ </span> -->
                </div>

                <h1 class="font-bold">$ {{ equity }}</h1>
                <small>Estimated Equity</small>
            </div>
        </div>
        <div class="col-md-4 card-info__wrapper mb-4 md:mb-0">
            <div class="card card-info">
                <div class="flex justify-between items-center">
                    <img src="../assets/icons/usdc.png" width="28" alt="">
                    <!-- <span class="pill pill-red"> 3% ▼ </span> -->
                </div>

                <h1 class="font-bold">{{ balance }}</h1>
                <small>USDSC Balance</small>
            </div>
        </div>
        <!-- <div class="col-md-4 card-info__wrapper mb-4 md:mb-0">
            <div class="card card-info">
                <div class="flex justify-between items-center">
                    <img src="../assets/icons/trade.png" width="28" alt="" class="icon">
                    <span class="pill pill-red"> 3% ▼ </span>
                </div>

                <h1 class="font-bold">$ 3911.99</h1>
                <small>Profits So Far</small>
            </div>
        </div> -->
        <div class="col-md-4 card-info__wrapper mb-4 md:mb-0">
            <div class="card card-info">
                <div class="flex justify-between items-center">
                    <img src="../assets/icons/market-cap.svg" width="23" alt="" class="icon">

                    <!-- <span class="pill pill-green"> 3% ▲ </span> -->
                </div>

                <h1 class="font-bold">$ {{ total }}</h1>
                <small>Total in Orders</small>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'

export default {
    data() {
        return {
            equity : 0,
            balance : 0,
            total : 0,
        }
    },
    mounted() {
        this.loadData()
    },
    methods : {
        async loadData() {
            let { balance, currency } = await api.get('balance/USDC')
            this.balance = balance
            this.equity = balance * currency.current_price.USD
            this.total = currency.freezing   
        }
    }
}
</script>

<style lang="scss">
.card-info {
    padding-bottom: 10px;
    position: relative;

    @media screen and (min-width: 1024px) and (max-width: 1400px){
        &__wrapper { 
            padding-left: 7.5px;
            padding-right: 7.5px;

            h1 { font-size: 23px !important; }
        }
    }

    &:before{
        content: '';
        position: absolute;
        width: calc(100% - 20px);
        height: 5px;
        border-radius: 0 0 12px 12px;
        background: linear-gradient(90deg, #F23345 0%, #2CDB00 100%);
        bottom: -6px;
        left: 10px;
        z-index: 0;
    }

    h1 {
        margin-top: 10px;
        font-size: 29px;
        font-weight: 900;
        letter-spacing: 0.45px;
        margin-bottom: 0;
    }

    .pill { 
        border-radius: 12px; 
        padding: 3px 12px;
        font-size: 13px;
        font-weight: bold;
    }
    
    .pill-red {
        background: linear-gradient(90deg, #EF3141 0%, #BC1A16 100%);
    }   
    .pill-green {
        background: linear-gradient(90deg, #34F500 0%, #1B9100 100%);
    }
}
</style>