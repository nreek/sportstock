<template>
    <div class="funds page-container">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/funds.png" class="icon" alt="">
            Funds
        </h2>

        <div class="card">
            <div class="card__header">
                <h6 class="text-bold">My Portfolio</h6>

                    <div class="coin-checkbox">
                        <input type="checkbox" id="wallets-hide-zero" v-model="search.hideZeroBalances">
                        <label for="wallets-hide-zero">Hide zero balances</label>
                    </div>
            </div>

            <div class="row card__body">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="mt-3">
                            <thead>
                                <tr>
                                    <th style="min-width: 100px;">Name</th>
                                    <th style="min-width: 270px;">Actions</th>
                                    <th>Balance</th>
                                    <th>Available</th>
                                    <th>Freezing</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="coin in filteredCoins" :key="coin.id">
                                    <td>
                                        <img :src="coin.image" alt="" class="mr-2" style="vertical-align: -3px;" width="15">
                                        <span>{{ coin.name }}</span>
                                    </td>
                                    <td>
                                        <router-link v-if="coin.deposit" :to="`/wallets/deposit/${coin.name}`" class="btn btn-sm btn-outline btn-green mr-2">Deposit</router-link>
                                        <router-link v-if="coin.withdraw" :to="`/wallets/withdraw/${coin.name}`" class="btn btn-sm btn-outline btn-pink mr-2">Withdraw</router-link>
                                        <router-link :to="`/history/${coin.name}`" class="btn btn-sm btn-outline btn-purple">History</router-link>
                                    </td>
                                    <td>{{ coin.balance.length ? coin.balance[0].balance  : '0.0000' }}</td>
                                    <td>
                                        {{ coin.balance.length ? coin.balance[0].balance - coin.balance[0].in_order  : '0.0000' }}
                                    </td>
                                    <td>{{ coin.balance.length ? coin.balance[0].in_order  : '0.0000' }}</td>
                                    <td v-if="coin.deposit && coin.withdraw"><span class="text-green">Available</span></td>
                                    <td v-else><span class="text-red">Unavailable</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import coins from '@/mixins/coins'

export default {
    name: 'Funds',
    components: {},
    mixins: [ coins ],
    data() {
        return {
            search : {
                hideZeroBalances : false,
            }
        }
    },
    methods : {
        filterCoins () {
            this.filteredCoins = this.search.hideZeroBalances ? this.coins.filter(coin => coin.balance.length ) : this.coins
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .funds {
        
    }
</style>
