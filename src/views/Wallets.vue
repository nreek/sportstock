<template>
    <div class="wallets page-container">
        <div class="row mb-3 mt-3">
            <div class="col-md-3">
                <div class="form-group">
                    <img src="../assets/icons/search.png" class="icon" alt="">
                    <input type="text" name="wallets-q" v-model="search.q" placeholder="Search by coin name">
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="coin-checkbox">
                    <input type="checkbox" id="wallets-hide-zero" v-model="search.hideZeroBalances">
                    <label for="wallets-hide-zero">Hide zero balances</label>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <!-- <div class="col-md-12 mb-3">
                <h4 class="section-title">{{ t }}</h4>
            </div> -->
            <div class="col-md-4 mb-5" v-for="coin in filteredCoins" :key="coin.id">
                <CardCoin :coin="coin"></CardCoin>
            </div>

            <template v-if="!filteredCoins.length">
                <div class="col-md-4 mb-5" v-for="i in [1,2,3,4,5,6]" :key="i">
                    <div class="card">
                        <vue-content-loading :width="366" :height="100" primary="#2a1840" secondary="#1f1234" >
                            <rect x="36" y="8" rx="3" ry="3" width="100" height="12" /> 
                            <rect x="324" y="7" rx="3" ry="3" width="19" height="15" /> 
                            <rect x="6" y="41" rx="3" ry="3" width="309" height="25" /> 
                            <rect x="8" y="82" rx="3" ry="3" width="94" height="8" /> 
                            <rect x="65" y="169" rx="3" ry="3" width="178" height="6" /> 
                            <circle cx="13" cy="13" r="13" /> 
                            <rect x="110" y="82" rx="3" ry="3" width="94" height="8" /> 
                            <rect x="211" y="82" rx="3" ry="3" width="94" height="8" />
                        </vue-content-loading>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import CardCoin from '@/components/CardCoin'
import coins from '@/mixins/coins'

export default {
    name: 'Wallets',
    components: { CardCoin },
    mixins: [ coins ],
    data() {
        return {
            search : {
                q : '',
                hideZeroBalances : false,
            }
        }
    },
    methods : {
        filterCoins() {
            let qCoins = this.search.q != '' ? this.coins.filter(coin => coin.name.toLowerCase().indexOf(this.search.q.toLowerCase()) > -1 ) : this.coins
            let hideZeroBalancesCoins = this.search.hideZeroBalances ? qCoins.filter(coin => coin.balance.length ) : qCoins
            this.filteredCoins = hideZeroBalancesCoins
        }
    },
}
</script>

<style lang="scss" scoped>
   
</style>
