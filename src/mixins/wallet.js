import { mapGetters, mapActions } from 'vuex' 

export default  {
    computed: { 
        ...mapGetters([
            'coins',
            'activeCoin'
        ]),
    },
    watch: { 
        coins() {
            this.setActiveCoin(this.$route.params.coin)
        }
    },
    methods : {
        ...mapActions([
            'fetchCoins',
            'setActiveCoin',
        ]),
    },
    created() {        
        if(!this.coins.length) {
            this.fetchCoins()
        }
    }
}
