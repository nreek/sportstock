<template>
    <div>
        <img src="../assets/icons/menu.png" class="show-for-mobile-only icon close" alt="Open menu" @click="menuActive = !menuActive" width="25">

        <section class="section-sidebar" :class="{ 'menu-active' : menuActive }" ref="sectionSidebar">
            <!-- <img src="../assets/images/toggle-menu.png" class="toggle-menu hide-for-mobile-only" @click="menuActive = !menuActive" alt=""> -->
            <div class="user text-center p-4">
                <img src="http://lorempixel.com/200/200/people/" width="150" height="150" alt="" class="user-picture rounded-full border-2 border-white mb-4 block mx-auto">
                <div class="user-info">
                    <h6 class="font-bold mb-0">Carlos Silva</h6>
                    <span class="font-thin">UID: 81745</span>
                </div>
            </div>
            <nav class="main-nav">
                <div 
                v-for="item in menuItems" 
                :key="item.link"
                class="main-nav__link" 
                @click="menuActive = false"
                >
                    <router-link v-if="item.target == '_self'" :to="`/${item.link}`">
                        <img class="icon" :src="require(`@/assets/icons/${item.icon}`)" alt="">
                        <span v-html="item.title"></span>
                    </router-link>
                    <a :href="item.link" target="_blank" v-else>
                        <img class="icon" :src="require(`@/assets/icons/${item.icon}`)" alt="">
                        <span v-html="item.title"></span>
                    </a>
                </div>

                <div class="main-nav__link">
                    <a href="javascript:void(0);" @click="$store.commit('SET_CREATE_TOKEN', true)">
                        <img class="icon" :src="require(`@/assets/icons/create-token.svg`)" alt="">
                        <span>Create Token</span>
                    </a>
                </div>
                <div class="main-nav__link">
                    <a href="#" target="_blank">
                        <img class="icon" :src="require(`@/assets/icons/helpdesk.png`)" alt="">
                        <span>Helpdesk</span>
                    </a>
                </div>
            </nav>  

            <div class="flex flex-col px-5 py-6 hide-for-large">
                <div class="flex-1 mb-2">
                    <input type="text" class="search" placeholder="Search for...">
                </div>

                <router-link to="/wallets/deposit/BTC" class="flex items-center my-2 text-green">
                    <img src="../assets/icons/deposit-usdsc.png" class="mr-2" width="22" alt="">
                    Deposit USDSC
                </router-link>

                <router-link to="/wallets/withdraw/BTC" class="flex items-center my-2 text-red">
                    <img src="../assets/icons/withdraw-usdsc.png" class="mr-2" width="22" alt="">
                    Withdraw USDSC
                </router-link>

                <router-link to="/login" class="flex items-center my-2" @click="logout">
                    <img src="../assets/icons/logout.png" class="icon mr-2" width="16" alt="">
                    Logout
                </router-link>
            </div>

            <div class="help px-5 py-6">
                <span>Need help?</span>
                <a class="text-green block mb-4" href="mailto:support@usdsoccer.io">support@usdsoccer.io</a>

                <a href="#" target="_blank" class="help-link">Customer Agreement</a>
                <a href="#" target="_blank" class="help-link">Order Execution Policy</a>
                <a href="#" target="_blank" class="help-link">Summary of Conflicts</a>
                <a href="#" target="_blank" class="help-link">API Documentation</a>
                <a href="#" target="_blank" class="help-link">Privacy Policy</a>
                <a href="#" target="_blank" class="help-link">AML & KYC Policy</a>
                <a href="#" target="_blank" class="help-link">Cookie Policy</a>
                <a href="#" target="_blank" class="help-link">Risk Disclousure</a>
                <a href="#" target="_blank" class="help-link">API Agreement</a>
            </div>

        </section>
        </div>
</template>

<script>
export default {
    name : 'CoinSidebar',
    data() {
        return {
            menuActive : true,
            mobileActive : false,
            menuItems : [
                { title : 'Dashboard', link : 'dashboard', target : '_self', icon : 'dashboard.png' },
                { title : 'My Profile', link : 'profile', target : '_self', icon : 'profile.png' },
                { title : 'Portfolio', link : 'portfolio', target : '_self', icon : 'portfolio.png' },
                { title : 'Trade', link : 'trade', target : '_self', icon : 'trade.png' },
                { title : 'Market Cap', link : 'market-cap', target : '_self', icon : 'market-cap.svg' },
                { title : 'History', link : 'history', target : '_self', icon : 'history.png' },
            ]
        }
    },
    methods: {
        logout(){
            window.localStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .user {
        background-image: url('../assets/images/sidebar-bg.png');
        background-size: cover;

        @include mobile {
            display: flex;
            align-items: center;

            img { 
                width: 80px; 
                margin: 0 15px 0 0 !important;
            }
        }
    }

    .help {
        * { 
            font-size: 14px;
            display: block;
            margin-bottom: 7px;
        }
    }

    .help-link {
        color: #C2DDA3 !important;
        letter-spacing: 0.2px;
    }

    .close {
        position: fixed;
        z-index: 1000;
        top: 20px;
        left: 20px;
        width: 20px;
    }

    .section-sidebar {
        position: relative;
        grid-area: sidebar;
        padding: 0 0 40px 0px;
        flex: 0 0 220px;
        max-width: 220px;
        min-width: 220px;
        border-right: 1px solid #ffffff17;
        margin-top: -20px;

        &, * { transition: all .6s; }

        @include mobile {
            position: fixed;
            z-index: 100;
            background: #1d3106;
            width: 70vw;
            max-width: 70vw;
            height: calc(100vh - 53px);
            overflow-y: auto;
            left: -100%;
            box-shadow: 0vw 0 rgba(0,0,0,0.0);
        }

        .toggle-menu {
            position: absolute;
            right: -12px;
            top: 50px;
            width: 24px;
            transform: rotate(0);
        }

        &.menu-active {
            left: 0;
            box-shadow: 30vw 0 rgba(0,0,0,0.5);

            @include desktop {
                flex: 0 0 220px;
                max-width: 220px;
                min-width: 220px;
                box-shadow: none;
            }
        }

        &:not(.menu-active) {
            .toggle-menu { transform: rotate(180deg); }
            .logo { width: 30px;}
        }
    }

    .main-nav {
        border-bottom: 1px solid rgba(white, 0.05);
        padding-bottom: 20px;

        &__link a {
            display: flex;
            align-items: center;
            margin: 5px 0;
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 1.8px;
            position: relative;
            padding: 12px 20px;

            &.router-link-active {
                font-weight: bold;
                background: linear-gradient(90deg, #466424 0%, #223908 100%);
            }
        }

        img {
            width: 19px;
            margin-right: 20px;
        }
    }
</style>