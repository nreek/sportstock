<template>
    <div class="trade-orders flex flex-col h-full">
        <h2 class="page-title font-bold px-3 py-2">Page Orders</h2>
        <div class="flex border-t border-b border-green-900 fz-13">
            <span class="py-3px px-3 font-bold w-1/3">Price</span>
            <span class="py-3px pr-2 font-bold flex-1">PALM</span>
            <span class="py-3px pr-2 font-bold flex-1">USDSC</span>
        </div>
        <div class="orders-panels overflow-auto fz-13">
            <div class="orders-panel flex-1">
                <div class="flex border-b order-item" v-for="i in [1,6,4,3,5,3,7,8,9,2,1,4]" :key="i">
                    <span class="py-3px px-3 text-red w-1/3">3243.00</span>
                    <span class="py-3px pr-2 flex-1">342524.234423</span>
                    <span class="py-3px pr-2 flex-1">2344324.43353</span>
                    <div class="order-item__progress red" :style="`width:${i * 5}%`"></div>
                </div>
            </div>
            <div class="orders-panel-separator flex items-center justify-between">
                <img src="../assets/icons/move.png" width="17" alt="">
                <span class="font-bold">31231.213 USDSC</span>
                <span class="text-red font-bold">-12.7%</span>
            </div>
            <div class="orders-panel flex-1">
                <div class="flex border-b order-item" v-for="i in [1,6,4,3,5,3,7,8,9,2,1,4,9,6,5,1,2]" :key="i">
                    <span class="py-3px px-3 text-green w-1/3">3243.00</span>
                    <span class="py-3px pr-2 flex-1">342524.234423</span>
                    <span class="py-3px pr-2 flex-1">2344324.43353</span>
                    <div class="order-item__progress green" :style="`width:${i * 5}%`"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .py-3px {
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .orders-panel-separator {
        background: #34461f;
        padding: 5px 20px;
    }

    .order-item {
        position: relative;
        border-color: rgba(255,255,255,0.07);

        span {  
            position: relative;
            z-index: 10;
        }

        &__progress {
            position: absolute;
            height: 100%;   
            top: 0;
            right: 0;
            opacity: 0.15;
            
            &.red { background: #FF3D57 }
            &.green { background: #1FC87F }
        }
    }
</style>