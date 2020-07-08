<template>
    <section class="section-header">
        <!-- <CardBalance></CardBalance> -->
        <router-link to="/" class="d-flex logo-wrapper"> 
            <img alt="Logo" class="logo hide-for-mobile-only" :src="require(`@/assets/images/logo-dark.png`)">
            <img alt="Logo" class="show-for-mobile-only" :src="require(`@/assets/images/logo-small.png`)" width="30">
            <img :src="require('@/assets/images/logo-decor.png')" alt="" class="decor">
        </router-link>
        
        <div class="d-flex">
            <div class="toggle-theme"  @click="$store.commit('TOGGLE_THEME')">
                <img src="../assets/icons/toggle-dark.png" class="icon" alt="" width="20">
                <div class="toggle-theme__toggler"></div>
                <img src="../assets/icons/toggle-light.png" class="icon" alt="" width="27">
            </div>

            <router-link to="/login" class="logout" @click="logout">
                <img src="../assets/icons/logout.png" class="icon mr-2" width="16" alt="">
                Logout
            </router-link>
        </div>
    </section>
</template>

<script>
// import CardBalance from '@/components/CardBalance'

export default {
    name : 'CoinHeader',
    // components : { CardBalance },
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

    .logo { 
        width: 230px;
        transition: none;
        transform: translateX(-10px);
    }

    .section-header {
        grid-area: header;
        background: var(--c_primary-light);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;    
        padding: 15px 50px 15px 30px;
        margin-bottom: 20px;
        
        @include mobile {
            justify-content: center;
        }
    }

    .logo-wrapper { position: relative; }

    .decor{
        position: absolute;
        width: 25px;
        height: 73px;
        right: -13px;
        top: 0;
    }

    .logout {
        display: flex;
        align-items: center;
        margin: 0 20px;

        @include mobile {
            display: none;
        }
    }

    .toggle-theme {
        display: flex;
        align-items: center;
        margin: 0 20px 0 40px;
        cursor: pointer;

        @include mobile {
            position: absolute;
            top: 17px;
            right: 40px;
        }

        &__toggler {
            height: 23px;
            width: 50px;
            border: 1px solid rgba(255,255,255,0.29);
            border-radius: 11.5px;
            background-color: #6C4A8F;
            position: relative;
            margin: 0 7.5px;

            &:after {
                content: '';
                height: 17px;
                width: 17px;
                border-radius: 50%;
                background: radial-gradient(circle, #6C4A8F 0%, #291840 100%);
                position: absolute;
                top: 2px;
                left: var(--toggle-theme__left);
                transition: all .6s;
            }
        }
    }

</style>