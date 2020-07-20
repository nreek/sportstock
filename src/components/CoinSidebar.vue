<template>
    <section class="section-sidebar" :class="{ 'menu-active' : menuActive }" ref="sectionSidebar" @click="mobileActive = !mobileActive">
        <!-- <img src="../assets/images/toggle-menu.png" class="toggle-menu hide-for-mobile-only" @click="menuActive = !menuActive" alt=""> -->

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

        <img src="../assets/icons/menu.png" class="show-for-mobile-only" alt="Open menu" width="25">
    </section>
</template>

<script>
export default {
    name : 'CoinSidebar',
    data() {
        return {
            menuActive : true,
            mobileActive : false,
            menuItems : [
                { title : 'Dashboard', link : '/', target : '_self', icon : 'dashboard.png' },
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

    .section-sidebar {
        position: relative;
        grid-area: sidebar;
        padding: 40px 0px;
        flex: 0 0 70px;
        max-width: 70px;
        border-right: 1px solid #ffffff17;
        margin-top: -20px;

        @include mobile {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &, * { transition: all .6s; }

        .toggle-menu {
            position: absolute;
            right: -12px;
            top: 50px;
            width: 24px;
            transform: rotate(0);
        }

        &.menu-active {
            @include desktop {
                flex: 0 0 220px;
                max-width: 220px;
            }

            @include mobile {
                padding: 15px 20px;
                flex: 0 0 auto;
                max-width: none;
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
        margin-top: 40px;

        @include mobile {
            position: absolute;
            background: var(--c-primary);
            width: 100vw;
            margin: 0;
            padding-left: 20px;
            left: 0;
            z-index: 1000;
            overflow: hidden;
            max-height: 0;
            transition: all .8s;
            position: absolute;
            top: 60px;

            &.mobile-active {
                box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                max-height: 90vh;
            }
        }

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