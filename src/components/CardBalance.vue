<template>
  <div class="card-balance" v-if="$route.path == '/wallets'">
        <div class="card-balance__header">
            <img src="../assets/icons/card.png" class="card-balance__icon" alt="">

            <div class="card-balance__infos">
                <small>Card Balance:</small>
                <h6 class="mb-0 fw-bold">$1246.94 USD</h6>
            </div>

            <img src="../assets/icons/arrow-down.png" class="icon" width="15" alt="">
        </div>
        <div class="card-balance__body">
            <div class="row">
                <div class="col-md-4">
                    <router-link to="/" class="card-balance__button">Add Funds</router-link>
                    <router-link to="/" class="card-balance__button">Withdraw Funds</router-link>
                    <router-link to="/" class="card-balance__button">Change Password</router-link>
                    <router-link to="/" class="card-balance__button">Lock Card</router-link>
                </div>
                <div class="col-md-8">
                    <img src="../assets/images/card-visa.png" class="hide-for-mobile-only" width="320" alt="">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name : 'CardBalance',
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .card-balance {
        font-size: 14px;
        position: relative;
        z-index: 100;

        &:hover {
            .card-balance__header {
                background: #DBCFEC;
                color: $c_primary;
                border-radius: 15px 15px 0 0;
                border-bottom: none;
            }
            .card-balance__body {
                display: block;
            }
        }

        h6 { font-size: 14px; }

        &__header {
            display: flex;
            align-items: center;
            padding: 5px 20px;
            border-radius: 15px;
            border: 1px solid $c_secondary;
        }

        &__body {
            padding: 20px;
            border-radius: 0 15px 15px 15px;
            background: #DBCFEC;
            display: none;
            position: absolute;
            min-width: 535px;
            border: 1px solid $c_secondary;
            border-top: none;

            @include mobile {
                min-width: 100%;
                border-radius: 0 0 15px 15px;
                border: 1px solid #6C4A8F;
                margin-top: -1px;
                border-top: none;
            }
        }

        &__infos {
            margin-right: 20px;
        }

        &__icon {
            width: 25px;
            margin-right: 20px;
        }

        &__button {
            border-radius: 5px;
            display: block;
            text-align: center;
            font-size: 12px;
            margin: 4px 0 10px 0;
            padding: 12px;
            background: #6C4A8F;
            color: white !important;

            &:last-child{ margin-bottom: 0; }
        }
    }

</style>