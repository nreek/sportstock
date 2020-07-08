import { mapGetters, mapActions } from 'vuex' 

export default {
    data() {
        return {
            filteredCoins: [],
        }
    },
    computed: { 
        ...mapGetters([
            'coins',
        ]),
    },
    watch: { 
        search  : {
            deep : true,
            handler : 'filterCoins',
        },
        coins() {
            this.filteredCoins = this.coins
        }
    },
    methods: { 
        ...mapActions(['fetchCoins']),
    },
    created(){
        this.filteredCoins = this.coins
        
        if(!this.coins.length) {
            this.fetchCoins()
        }
    }
}