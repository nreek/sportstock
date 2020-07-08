<template>
    <div class="wallets-coin card small">
        <div class="wallets-coin__header">
            <img :src="coin.image" class="mr-2" height="17" alt="">
            {{ coin.description }}
        </div>

        <h5 class="mt-2 mb-2">{{ `${coin.balance.length ? coin.balance[0].balance : '0.00' } ${coin.name.toUpperCase()}` }}</h5>

        <div class="wallets-coin__links">
            <router-link :to="`/wallets/deposit/${coin.name}`">Deposit </router-link>
            <router-link :to="`/wallets/withdraw/${coin.name}`"> Withdraw </router-link>
            <router-link :to="`/exchange/${coin.name}`"> Exchange </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props : [ 'coin' ],
    methods : {
        getPrice(){
            return this.coin.conversions.find( item => item.base_currency == this.base_currency )?.value 
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .wallets-coin {
        background-image: url('../assets/icons/m.png');
        background-size: 19px 19px;
        background-position: calc(100% - 15px) 15px;
        background-repeat: no-repeat;

        &__header {
            display: flex;
            align-items: center;
        }

        &__links a{
            font-size: 13px;
            display: inline-block;
            margin-right: 15px;
            color: rgba(#A87AD2, 0.47) !important;

            &:hover { color: $c_highlight !important; }
        }
    }
</style>