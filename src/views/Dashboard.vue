<template>
    <div class="dashboard page-container w-full">
        <div class="row h-full">
            <div class="col-md-9 main-left">
                <h2 class="page-title mb-4 flex justify-between">
                    <div class="flex items-center text-bold">
                        <img src="../assets/icons/document.png" class="icon" alt="" style="width: 20px">
                        General Report
                    </div>

                    <div class="flex items-center fz-16">
                        <img src="../assets/icons/refresh.png" class="icon" alt="" style="width: 20px">
                        Reload Data
                    </div>
                </h2>

                <div class="row">
                    <div class="col-md-3 card-info__wrapper">
                        <div class="card card-info">
                            <div class="flex justify-between items-center">
                                <img src="../assets/icons/house.png" width="28" alt="">

                                <span class="pill pill-green"> 3% ▲ </span>
                            </div>

                            <h1 class="font-bold">$ 7988.12</h1>
                            <small>Estimated Equity</small>
                        </div>
                    </div>
                    <div class="col-md-3 card-info__wrapper">
                        <div class="card card-info">
                            <div class="flex justify-between items-center">
                                <img src="../assets/icons/usdc.png" width="28" alt="">

                                <span class="pill pill-red"> 3% ▼ </span>
                            </div>

                            <h1 class="font-bold">14988.11</h1>
                            <small>USDSC Balance</small>
                        </div>
                    </div>
                    <div class="col-md-3 card-info__wrapper">
                        <div class="card card-info">
                            <div class="flex justify-between items-center">
                                <img src="../assets/icons/trade.png" width="28" alt="" class="icon">

                                <span class="pill pill-red"> 3% ▼ </span>
                            </div>

                            <h1 class="font-bold">$ 3911.99</h1>
                            <small>Profits So Far</small>
                        </div>
                    </div>
                    <div class="col-md-3 card-info__wrapper">
                        <div class="card card-info">
                            <div class="flex justify-between items-center">
                                <img src="../assets/icons/market-cap.svg" width="23" alt="" class="icon">

                                <span class="pill pill-green"> 3% ▲ </span>
                            </div>

                            <h1 class="font-bold">$ 3911.99</h1>
                            <small>Total in Orders</small>
                        </div>
                    </div>
                </div>
            
                <EquityEvolution></EquityEvolution>

                <div class="row">
                    <div class="col-md-6">
                        <crowdfunding></crowdfunding>
                    </div>
                </div>
            </div>

            <div class="col-md-3 sidebar-right">
                <sport-panel title="Team Market Cap" :icon="require('@/assets/icons/ball.svg')">
                    <div class="card mb-2 flex items-center" v-for="(team, index) in teams" :key="`team-${index}`">
                        <img :src="require('@/assets/images/team-logo.png')" width="38" class="mr-2" alt="">

                        <div class="flex-1">
                            <p class="font-bold">{{ team }}</p>
                            <small class="uppercase">1 {{ team.substring(0, 3) }} </small>
                        </div>

                        <span class="text-bold" :class="index % 3 != 1 ? 'text-green' : 'text-red'">{{ index % 3 != 1 ? '+' : '-' }} {{ index }}5%</span>
                    </div>

                    <div class="card mb-2 flex items-center border border-dashed border-red-800">
                        <img :src="require('@/assets/icons/empty-shield.png')" width="38" class="mr-2" alt="">
                        <div class="flex-1">
                            <p class="font-bold">Create Team Token</p>
                            <small class="text-green uppercase">Start Now</small>
                        </div>
                    </div>

                    <div class="card mb-2 flex justify-center items-center border border-dashed border-green-900" style="background-color: #223a09">
                        <span class="uppercase font-bold py-2">VIEW ALL</span>
                    </div>
                </sport-panel>

                <sport-panel title="Player Market Cap" :icon="require('@/assets/icons/chuteira.svg')">
                    <div class="card mb-2 flex items-center" v-for="(team, index) in players" :key="`team-${index}`">
                        <img :src="require('@/assets/images/neymar.png')" width="38" class="mr-2" alt="">

                        <div class="flex-1">
                            <p class="font-bold">{{ team }}</p>
                            <small class="uppercase">1 {{ team.substring(0, 3) }} </small>
                        </div>

                        <span class="text-bold" :class="index % 3 != 1 ? 'text-green' : 'text-red'">{{ index % 3 != 1 ? '+' : '-' }} {{ index }}5%</span>
                    </div>

                    <div class="card mb-2 flex items-center border border-dashed border-red-800">
                        <img :src="require('@/assets/icons/empty-shield.png')" width="38" class="mr-2" alt="">
                        <div class="flex-1">
                            <p class="font-bold">Create Player Token</p>
                            <small class="text-green uppercase">Start Now</small>
                        </div>
                    </div>

                    <div class="card mb-2 flex justify-center items-center border border-dashed border-green-900" style="background-color: #223a09">
                        <span class="uppercase font-bold py-2">VIEW ALL</span>
                    </div>
                </sport-panel>

            </div>
        </div>
    </div>
</template>

<script>
import EquityEvolution from '@/components/EquityEvolution'
import Crowdfunding from '@/components/Crowdfunding'

export default {
    name: 'History',
    components: { EquityEvolution, Crowdfunding },
    data() {
        return {
            teams : ['Paraná', 'Cruzeiro', 'Palmeiras', 'Criciuma', 'São Bento', 'Real Madrid', 'Barcelona'],
            players : ['C. Ronaldo', 'Neymar Jr', 'R. Madrid', 'Falcão', 'Paraná'],
        }
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .dashboard {
        padding-right: 16px;
        padding-left: 20px;
        margin-top: -20px;

        .main-left {
            padding-top: 20px;
        }

        .sidebar-right {
            background: #27410A;
            border-left: 1px solid rgba(255,255,255,0.07);
            height: 100%;
            padding: 0;

            .card {
                padding: 7px 10px;

                p { line-height: 1; padding-top: 3px; }

                img { border-radius: 50%; }
            }
        } 

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
                margin-top: 25px;
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
    }
</style>
