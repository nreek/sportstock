<template>
    <div>
        <img src="../assets/icons/menu.png" class="show-for-mobile-only icon close" alt="Open menu" @click="menuActive = !menuActive" width="25">

        <section class="section-sidebar" :class="{ 'menu-active' : menuActive }" ref="sectionSidebar" @click="mobileActive = !mobileActive">
            <!-- <img src="../assets/images/toggle-menu.png" class="toggle-menu hide-for-mobile-only" @click="menuActive = !menuActive" alt=""> -->
            <div class="user text-center p-4">
                <img src="http://lorempixel.com/200/200/people/" alt="" class="user-picture rounded-full border-2 border-white mb-4 block mx-auto">
                <h6 class="font-bold mb-0">James Batista</h6>
                <span class="font-thin">UID: 81745</span>
            </div>
            <nav class="main-nav" :class="{ 'mobile-active' : mobileActive }">
                <div 
                v-for="item in menuItems" 
                :key="item.link"
                class="main-nav__link" 
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
            </nav>  

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
                { title : 'Dashboard', link : '', target : '_self', icon : 'dashboard.png' },
                { title : 'My Profile', link : 'profile', target : '_self', icon : 'profile.png' },
                { title : 'Portfolio', link : 'portfolio', target : '_self', icon : 'portfolio.png' },
                { title : 'Trade', link : 'trade', target : '_self', icon : 'trade.png' },
                { title : 'Market Cap', link : 'market-cap', target : '_self', icon : 'market-cap.svg' },
                { title : 'History', link : 'history', target : '_self', icon : 'history.png' },
                { title : 'Create Token', link : 'create-token', target : '_self', icon : 'create-token.svg' },
                { title : 'Helpdesk', link : 'helpdesk', target : '_self', icon : 'helpdesk.png' },
            ]
        }
    },
    mounted () {
        if (window.innerWidth < 768) {
            this.$refs.sectionSidebar.classList += ' menu-active'
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
    }

    .close {
        position: absolute;
        z-index: 1000;
        top: 20px;
        left: 20px;
        width: 20px;
    }

    .section-sidebar {
        position: relative;
        grid-area: sidebar;
        padding: 0 0 40px 0px;
        flex: 0 0 70px;
        max-width: 70px;
        border-right: 1px solid #ffffff17;
        margin-top: -20px;

        &, * { transition: all .6s; }

        @include mobile {
            position: absolute;
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
            .main-nav__link span { opacity: 0; }
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