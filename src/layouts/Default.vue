<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 app-content" :class="{ 'menu-active' : $store.state.menuActive }">
                <CoinHeader></CoinHeader>
                <div class="view-content">
                    <CoinSidebar></CoinSidebar>
                    <slot></slot>
                </div>
            </div>
        </div>

        <chat></chat>
        <CreateToken></CreateToken>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import api from '@/api'
import CoinHeader from '@/components/CoinHeader'
import CoinSidebar from '@/components/CoinSidebar'

export default {
    components : {
        CoinHeader,
        CoinSidebar,
    },
    computed: {
        ...mapGetters([ 'token' ])
    },
    methods: { 
        ...mapActions(['setUser'])
    },
    mounted() {
        if(!this.token) {
            this.$router.push('/login')
        }else {
            api.get('user').then(res => {
                if(res.message) {
                    this.$router.push('/login')   
                }else {
                    this.setUser(res)
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .view-content {
        display: flex;
        margin-top: 95px;

        @media screen and (max-width: 768px) {
            margin-top: 70px;
        }
    }
</style>