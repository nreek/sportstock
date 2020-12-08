<template>
    <div class="crowdfunding">
        <h2 class="page-title mb-4 mt-10 flex justify-between">
            <div class="flex items-center text-bold">
                <img src="../assets/icons/document.png" class="icon" alt="" style="width: 20px">
                Crowdfunding
            </div>
        </h2>

        <div class="card overflow-hidden h-auto" v-if="crowdfunding">
            <h6 class="px-4 py-2 font-bold my-2">{{ crowdfunding.title }}</h6>
            <img :src="crowdfunding.banner" alt="" class="mb-2" width="100%">
            <!-- <div class="player-team p-4 flex items-center justify-between">
                <div class="text-center">
                    <img src="../assets/images/miranda.png" alt="">
                    <p class="lh-1 mt-3 mb-0">Soccer Player</p>
                    <p class="font-bold">Miranda</p>
                </div>
                <img src="../assets/icons/switch.png" class="w-10 md:w-auto" alt="">
                <div class="text-center">
                    <img src="../assets/images/spfc.png" alt="">
                    <p class="lh-1 mt-3 mb-0">Sport Club</p>
                    <p class="font-bold">São Paulo</p>
                </div>
            </div> -->

            <div class="card__footer">
                <div class="progress-bar mt-3">
                    <span class="start top">Start</span>
                    <span class="start bottom">$0</span>
                    
                    <div class="progress" :style="{ 'width': `${progress}%`}"></div>

                    <span class="end top">Goal</span>
                    <div class="end bottom">$ {{ crowdfunding.amount }}</div>
                </div>
            </div>

            <div class="card__footer">
                <div class="flex items-center fz-21">
                    <img src="../assets/icons/clock.png" alt="" class="mr-3">
                    <p class="lh-1">Ends in  <span class="text-green mr-3">{{ formatDate(crowdfunding.end_date) }}</span></p>
                    <router-link to="trade" class="btn-border-gradient"><span>Contribute</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import { formatDistance, parse } from 'date-fns'

export default {
    name : 'Crowdfunding',
    data() {
        return { crowdfunding : false, progress : 0 }
    },
    async mounted () {
        this.crowdfunding = await api.get('crowdfunding-home')

        window.setTimeout(() => {
            this.progress =  this.crowdfunding.current_amount * 100 / this.crowdfunding.amount
        }, 1000)
    },
    methods : {
        formatDate(date) {
            return formatDistance(new Date(), parse(date, 'yyyy-MM-dd', new Date()))
        }
    }
}
</script>

<style lang="scss">
    .crowdfunding {
        .card { padding: 0; }

        .card__footer { 
            background: #1B2C07; 
            padding: 25px;
        }

        .progress-bar {
            border-radius: 18px;
            position: relative;
            background: #9e9e9e;
            height: 15px;
            width: 100%;

            &:after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 10;
                top: 0;
                background-image: linear-gradient(to right, 
                                transparent, transparent 25%, rgba(0,0,0,0.3) 25%, transparent calc(25% + 2px), 
                                transparent 50%, rgba(0,0,0,0.3) 50%, transparent calc(50% + 2px),
                                transparent 75%, rgba(0,0,0,0.3) 75%, transparent calc(75% + 2px) );
            }

            .start, .end {
                position: absolute;
                font-size: 14px;
            }

            .top { top: 0; transform: translateY(-100%); }
            .bottom { bottom: 0; transform: translateY(100%); }
            .start { left: 0;  }
            .end { right: 0;  }

            .progress {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                border-radius: 18px;
                background-image: linear-gradient(to right, #f32100, #6fd105);
                display: flex;
                justify-content: flex-end;
                transition: all .6s;

                &:after{
                    content: '';
                    min-width: 21px;
                    min-height: 21px;
                    transform: translateY(-2px) translateX(50%);
                    border-radius: 50%;
                    border: 3px solid white;
                    background: #d8d8d8;
                    z-index: 11;
                }
            }
        }
    }
</style>