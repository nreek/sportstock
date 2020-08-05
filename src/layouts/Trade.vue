<template>
    <div class="trade-wrapper">
        <section class="section-header">
            <img src="../assets/icons/menu.png" class="show-for-mobile-only icon close" alt="Open menu" @click="menuActive = !menuActive" width="25">
            <!-- <CardBalance></CardBalance> -->
            <router-link to="/" class="flex items-center logo-wrapper"> 
                <img alt="Logo" class="logo hide-for-mobile-only" :src="require(`@/assets/images/logo-dark.png`)">
                <img alt="Logo" class="show-for-mobile-only" :src="require(`@/assets/images/logo-dark.png`)" width="130">
            </router-link>

            <div class="flex-1 menu-mobile" :class="{ 'active' : menuActive }">
                <a href="#" style="letter-spacing: 2px" class="uppercase ml-3 fz-12 font-thin text-green">Live Trade</a>
                <a href="#" style="letter-spacing: 2px" class="uppercase ml-3 fz-12 font-thin ">My Portfolio</a>
                <a href="#" style="letter-spacing: 2px" class="uppercase ml-3 fz-12 font-thin ">Markets</a>
                <a href="#" style="letter-spacing: 2px" class="uppercase ml-3 fz-12 font-thin ">Create your token</a>

                <div class="d-flex ml-3 border-t pt-3 border-green-700 show-for-mobile-only">
                    <router-link to="/wallets/deposit/BTC" class="flex items-center mr-5 text-green">
                        <!-- <img src="../assets/icons/deposit-usdsc.png" class="mr-2" width="22" alt=""> -->
                        Deposit USDSC
                    </router-link>

                    <router-link to="/wallets/withdraw/BTC" class="flex items-center mr-5 text-red">
                        <!-- <img src="../assets/icons/withdraw-usdsc.png" class="mr-2" width="22" alt=""> -->
                        Withdraw USDSC
                    </router-link>

                    <router-link to="/login" class="flex items-center mr-5">
                        <img src="../assets/icons/logout.png" class="icon mr-2" width="16" alt="">
                        Logout
                    </router-link>
                </div>
            </div>
            
            <div class="d-flex ml-5 hide-for-mobile-only">
                <router-link to="/wallets/deposit/BTC" class="flex items-center mr-5 text-green">
                    <img src="../assets/icons/deposit-usdsc.png" class="mr-2" width="22" alt="">
                    Deposit USDSC
                </router-link>

                <router-link to="/wallets/withdraw/BTC" class="flex items-center mr-5 text-red">
                    <img src="../assets/icons/withdraw-usdsc.png" class="mr-2" width="22" alt="">
                    Withdraw USDSC
                </router-link>

                <router-link to="/login" class="flex items-center mr-5">
                    <img src="../assets/icons/logout.png" class="icon mr-2" width="16" alt="">
                    Logout
                </router-link>
            </div>
        </section>

        <div class="w-full">
            <marquee behavior="alternate" scrollamount="4" direction="left">
                <div class="flex">
                    <div class="marquee-coin mr-5 flex fz-12" v-for="(coin, index) in coins" :key="index">
                        <div class="marquee-coin__info mr-2">
                            <div class="uppercase" :class="`text-${index % 2 == 0 ? 'green' : 'red'}`">{{ coin }} / USDSC</div>
                            <div class="fz-10">44.12 USDSC</div>
                            <div class="fz-10">Volume: 61245.98</div>
                        </div>
                        <div :id="`spark-${index}`"></div>
                    </div>
                </div>
            </marquee>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menuActive : false,
            coins : [ 'NJR', 'AMJ', 'PBR', 'BLC', 'BJU', 'PAL', 'COR', 'PTX','NJR', 'AMJ', 'PBR', 'BLC', 'BJU', 'PAL', 'COR', 'PTX','NJR', 'AMJ', 'PBR', 'BLC', 'BJU', 'PAL', 'COR', 'PTX','NJR', 'AMJ', 'PBR', 'BLC', 'BJU', 'PAL', 'COR', 'PTX']
        }
    },
    created() {
        this.coins.map( (x, index) => {
            const opts = {
                width : 170,
                height : 50,
                class: "spark",
                cursor: {
                    show: false
                },
                select: {
                    show: false,
                },
                legend: {
                    show: false,
                },
                scales: {
                    x: {
                        time: false,
                    },
                },
                axes: [
                    {
                        show: false,
                    },
                    {
                        show: false,
                    }
                ],
                series: [
                    {},
                    {
                        stroke: index % 2 == 0 ? "#28C700" : "#F23345",
                        fill: "transparent",
                    },
                ],
            };
            
            let can = new window.uPlot(opts, [ 
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 
                    [25093670, 22395560, 25817590, 21847230, 20507460, 17520500, 23735080, 18966120, 19974430, 25817950, 37781330, 34790520, 31130520, 35709870, 24143240, 18369300, 17916260, 19932550, 22684000, 22367480, 24377170, 17272900]
                ]).ctx.canvas;
            can.style.width = "170px";
            can.style.height = "50px";
            
            document.getElementById(`spark-${index}`).appendChild(can)
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .trade-wrapper {
        padding-top: 90px;

        @include mobile {
            padding-top: 70px;
        }
    }

    .icon.close {  
        left: 20px;
        position: fixed;
    }

    .menu-mobile {
        @include mobile {
            position: fixed;
            width: 60vw;
            flex-direction: column;
            display: flex;
            top: 53px;
            padding: 20px 20px 20px 8px;
            background: #31510d;
            height: calc(100vh - 53px);
            box-shadow: 40vw 0 0 #0000003b;
            transition: all .6s;
            left: -100vw;
            opacity: 0;

            &.active { left: 0; opacity: 1; }


            a { margin-bottom: 20px; }
        }
    }

    .logo { 
        width: 210px;
        transition: none;
        transform: translateX(-10px);
    }

    .section-header {
        background: var(--c_primary-light);
        display: flex;
        top: 0;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;    
        padding: 10px 50px 10px 30px;
        margin-bottom: 20px;
        position: fixed;
        width: 100vw;
        z-index: 100;
        max-width: 100vw;
        box-shadow: 0 0 30px rgba(0,0,0,0.2);
        
        @include mobile {
            justify-content: center;
            padding: 10px 30px;
        }
    }

</style>