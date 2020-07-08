<template>
    <div class="form-control select-advanced" :class="{'active' : active }">
        <div class="select-advanced__header" @click="active = !active">
            <span>{{ selected ? selected.name : placeholder }}</span>
            <img src="../assets/icons/caret-down.png" :class="{'transform-rotate-180' : active }" width="14" alt="">
        </div>
        <div class="select-advanced__body">
            <div class="select-advanced__search">
                <img src="../assets/icons/search.png" width="15" alt="">
                <input type="text" placeholder="Search" v-model="search" name="q" id="q" autocomplete="false">
            </div>
            <div class="select-advanced__list">
                <a href="javascript:void(0);" @click="emit(coin)" v-for="coin in filteredCoins" :key="coin.id" class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <img :src="coin.image" alt="" class="mr-2" style="vertical-align: -3px;" width="15">
                        <span>{{ coin.name }}</span>
                    </div>
                    <span>1.3345464564654</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import coins from '@/mixins/coins'

export default {
    props : [ 'placeholder', 'value'],
    mixins : [ coins ],
    data () {
        return {
            active : false,
            search : '',
            selected : false
        }
    },
    watch: { 
        filteredCoins(){
            if(this.value) {
                this.selected = this.filteredCoins.find(coin => {
                    return coin.id == this.value.id
                })
            }
        }
    },
    methods : {
        emit(coin){
            this.$emit('change', coin); 
            this.selected = coin
            this.active = false
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .select-advanced {
        cursor: pointer;
        padding: 0;
        font-size: 14px;
        transition: all .6s;
        position: relative;

        &.active {
            background: var(--select-advanced__bg-active);
            border-bottom: none;
            overflow: initial;

            .select-advanced__body {
                max-height: 200px;
            }
        }

        &__body {
            max-height: 0;
            transition: all .6s;
            overflow: auto;
            position: absolute;
            width: calc(100% + 2px);
            left: -1px;
            background: var(--select-advanced__bg-active);
            border-left: 1px solid #4F3067;
            border-right: 1px solid #4F3067;
            z-index: 10;
        }

        &__header, &__search {
            padding: 7px 20px;
        }

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__search {
            border-top: 1px solid #6E295F;
            border-bottom: 1px solid #6E295F;
            position: relative;

            img {
                position: absolute;
                top: 16px;
                left: 27px;
            }

            input { 
                width: 100%;
                border: 1px solid #4F3067 !important;
                border-radius: 5px;
                background: var(--c_primary-light);
                padding: 5px 10px 5px 25px;
                max-width: none;
            }
        }

        &__list a{
            padding: 3px 20px;
            transition: all .6s;

            &:hover {
                background: var(--c_primary-light);
            }
        }
    }
</style>