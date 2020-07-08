<template>
    <div class="balance" v-if="activeCoin.conversions">
        <img :src="activeCoin.image" width="15" alt="">
        <span>Balance: </span>
        <strong>{{ `${getPrice()} ${activeCoin.name}` }}</strong>
    </div>
</template>

<script>
import { mapGetters } from 'vuex' 

export default {
    computed: { 
        ...mapGetters([
            'activeCoin'
        ]),
    },
    methods : {
        getPrice(){
            const { balance } = this.activeCoin;
            return balance.length ? balance[0].balance : 0
        }
    }
}
</script>

<style lang="scss" scoped>
    .balance {
        font-size: 14px;
        display: flex;
        align-items: center;

        img {
            width: 15px;
            margin-right: 7px;
        }
    }
</style>