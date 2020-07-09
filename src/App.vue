<template>
    <div id="app" :class="layout == 'Default' ? $store.state.theme : 'dark'">
        <component :is="layout">
            <router-view :key="$router.path"/>
        </component>
    </div>
</template>

<script>
import Default from '@/layouts/Default';
import Auth from '@/layouts/Auth';

export default {
    name: 'Home',
    components: {
        Default,
        Auth,
    },
    computed : {
        layout() {
            return this.$route.meta.layout || 'Default';
        }
    }
}
</script>

<style lang="scss">
    @import './assets/scss/main.scss';

    #app > .container { 
        border-left: 1px solid rgba(gray, 0.1);

        .app-content {
            min-height: 100vh;
            transition: all .6s;
            padding: 0;
            display: flex;
            flex-direction: column;
        }

        .view-content { 
            flex: 1;
            background: var(--c_primary);
            color: var(--text__color);
            padding-bottom: 60px;
        }
    }

    .light {
        --c-primary: #f9f7fb;
        --c_primary: #f9f7fb;
        --c_primary-light: white;
        --c_secondary : #e9f0fe;
        --c_green: #68c700;
        --text__color: #6E295F;

        --c-input__bg: #f9f7fb;
        --toggle-theme__left: 30px;
        --icon__filter : none;
        --card__border-color: #C4AFD5;
        --select-advanced__bg-active: #e9f0fe;
        --pills__bg: #f9f7fb;
    }

    .dark {
        --c_primary: #233A09;
        --c-primary: #233A09;
        --c_secondary : #6C4A8F;
        --c_primary-light: #1D3106;
        --c_green: #BCFF73;
        --text__color : white;
        --pills__bg: #1F1234;

        --c-input__bg: #291840;
        --toggle-theme__left: 2px;
        --icon__filter: invert(100%) brightness(2);
        --card__border-color: transparent;
        --select-advanced__bg-active: #392456;

        .wallets {
            --text__color: #D8D8D8;
        }
    }
</style>
