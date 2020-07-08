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
        border: 1px solid $c_secondary;
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
            p { color: $c_secondary; margin: 0; }
            
            a {
                background: $c_secondary;
                border-radius: 5px;
                color: white !important;
                padding: 3px 30px;
                text-transform: uppercase;
                font-size: 11px;
            }
        }

    }
</style>