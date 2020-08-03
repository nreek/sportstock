<template>
    <div class="history page-container">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/history.png" class="icon" alt="">
            History
        </h2>

        <div class="row">
            <div class="col-md-12">
                <ul class="pills mb-4">
                    <li v-for="{ type, index } in types" :key="index" :type="type">
                        <a href="javascript:void(0);" :class="{ 'active' : index == activeType }" @click="activeType = index">{{ type }}</a>
                    </li>
                </ul>

                <template v-if="!history">
                    <div class="card h-auto mb-3" style="min-width: calc(100vw / 2); transition: all .6s" v-for="i in [1,2,3,4,5,6]" v-bind:key="i">
                        <vue-content-loading :width="900" :height="89" :speed="2" primary="#233a09" secondary="#304f0e">
                            <rect x="69" y="22" rx="3" ry="3" width="25" height="23" /> 
                            <rect x="69" y="60" rx="3" ry="3" width="85" height="8" /> 
                            <rect x="65" y="169" rx="3" ry="3" width="178" height="6" /> 
                            <circle cx="20" cy="38" r="15" /> 
                            <rect x="171" y="60" rx="3" ry="3" width="105" height="8" /> 
                            <rect x="170" y="22" rx="3" ry="3" width="106" height="23" /> 
                            <rect x="298" y="60" rx="3" ry="3" width="108" height="8" /> 
                            <rect x="297" y="22" rx="3" ry="3" width="109" height="23" /> 
                            <rect x="419" y="60" rx="3" ry="3" width="94" height="8" /> 
                            <rect x="418" y="22" rx="3" ry="3" width="158" height="23" /> 
                            <rect x="585" y="60" rx="3" ry="3" width="118" height="8" /> 
                            <rect x="584" y="22" rx="3" ry="3" width="120" height="23" /> 
                            <circle cx="742" cy="38" r="15" /> 
                            <rect x="777" y="35" rx="3" ry="3" width="60" height="8" />
                        </vue-content-loading>
                    </div>
                </template>

                <div v-for="entry in history.data" :key="entry.id" class="card d-flex align-items-center h-auto justify-content-around mb-3">
                    <img src="../assets/icons/refresh.png" alt="" width="15" class="mr-3 cursor-pointer" @click="fetchHistory">
                    <div class="mr-3">
                        <strong class="d-block">{{ entry.id }}</strong>
                        <small class="text-gray">{{ formatDate(entry.created_at) }}</small>
                    </div>
                    <div class="mr-3" style="width: 330px">
                        <strong class="d-block">{{ entry.description }}</strong>
                        <span class="text-gray">Description</span>
                    </div>
                    <div class="mr-3" style="width: 90px" v-show="activeType == ''">
                        <strong class="d-block capitalize">{{ entry.type }}</strong>
                        <span class="text-gray">Type</span>
                    </div>
                    <div class="mr-3">
                        <strong class="d-block">{{ `${entry.amount} ${entry.currency.name}` }}</strong>
                        <span class="text-gray">Amount</span>
                    </div>
                    <div class="mr-3">
                        <strong class="d-block">{{ parseFloat(entry.fee) ? entry.fee : '-' }}</strong>
                        <span class="text-gray">Transaction Fee</span>
                    </div>

                    <div class="column-status text-success">
                        <img :src="require(`@/assets/icons/${entry.status}.png`)" alt="" width="20" class="mr-3">
                        <span>See details</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
 
import { format } from 'date-fns'

export default {
    name: 'History',
    components: {},
    data() {
        return {
            types : [],
            activeType : '',
            history : false,
            page : 1
        }
    },
    watch : {
        activeType : {
            handler: 'fetchHistory',
            immediate : true,
        }
    },  
    async created () {
        let types = await api.get('wallets/history/types')
        Object.keys(types).map(key => this.types.push(types[key]) )
    },
    methods : {
        async fetchHistory() {
            this.history = false
            let history = await api.get(`wallets/history/${this.activeType}?page=${this.page}`)
            this.history = history;
        },
        formatDate (date) {
            return format( (new Date(date) ), 'MM.dd.yyyy')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .history {
        font-size: 14px;

        .card {
            @include mobile {
                overflow-x: auto;
                flex-wrap: nowrap;
                justify-content: flex-start !important;
            }
        }

        .column-status {
            width: 140px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            @include mobile {
                min-width: 130px;
                flex-wrap: nowrap;
            }

            span {
                transition: all .6s;
                border-bottom: 1px dotted black;
                cursor: pointer;

                @include desktop {
                    opacity: 0;
                }
            }

            &.text-red span { border-bottom-color: #dd616e; }
            &.text-success span { border-bottom-color: #00C595; }

            &:hover span { opacity: 1; }
        }
    }
</style>
