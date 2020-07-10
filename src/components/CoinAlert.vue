<template> 
    <div class="alert">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name : 'CoinAlert',
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .alert {
        border: 1px solid white;
        padding: 10px 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include mobile {
            flex-direction: column;
            text-align: center;
        }

        /deep/ {
            p { margin: 0; }
            
            a {
                background: #385d0f;
                border-radius: 5px;
                color: white !important;
                padding: 3px 30px;
                text-transform: uppercase;
                font-size: 11px;
            }
        }

    }
</style>