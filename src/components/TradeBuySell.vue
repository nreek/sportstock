<template>
    <div class="trade-buy">
        <div class="px-3 py-2">
            <div class="flex items-center justify-between">
                <h4 class="page-title font-bold m-0">{{ config.text }} PALM</h4>
                <small>Balance: 0 {{ config.coin }}</small>
            </div>
        </div>
        <div class="border-t border-green-900 border-b py-1 px-3">
            <a href="javascript:void(0);" class="uppercase text-xs mr-3 text-green">Limit</a>
            <a href="javascript:void(0);" class="uppercase text-xs mr-3">Market</a>
            <a href="javascript:void(0);" class="uppercase text-xs mr-3">Stop-Limit</a>
        </div>

        <div class="p-3">
            <div class="flex mb-2">
                <div class="w-1/4 flex items-center">
                    <label for="" class="font-bold fz-14">Price: </label>
                </div>
                <div class="flex-1 input-append-wrapper">
                    <input type="text">
                    <div class="input-append text-green">USDCS</div>
                </div>
            </div>
            <div class="flex mb-2">
                <div class="w-1/4 flex items-center">
                    <label for="" class="font-bold fz-14">Amount: </label>
                </div>
                <div class="flex-1 input-append-wrapper">
                    <input type="text">
                    <div class="input-append text-green">USDCS</div>
                </div>
            </div>
            <div class="flex mb-2">
                <div class="w-1/4 flex items-center">
                    <label for="" class="font-bold fz-14">Total: </label>
                </div>
                <div class="flex-1 input-append-wrapper">
                    <input type="text">
                    <div class="input-append text-green">USDCS</div>
                </div>
            </div>
            <div class="flex mb-2">
                <div class="w-1/4 flex items-center">
                    <label for="" class="font-bold fz-14">Total + Fee: </label>
                </div>
                <div class="flex-1 input-append-wrapper">
                    <input type="text" disabled>
                    <div class="input-append text-green">USDCS</div>
                </div>
            </div>

            <div class="flex justify-between items-center mt-3">
                <div class="coin-checkbox flex items-center mt-2">
                    <input type="checkbox">
                    <label for="">Order Confirmation</label>
                </div>

                <a href="#" :class="config.textColor" class="button">
                    <img :src="require(`@/assets/icons/trade-${config.icon}.png`)" alt="">
                    {{ config.text }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TradeBuy',
    props : [ 'action' ],
    data() {
        let config = this.action == 'sell'
                    ? {
                        textColor : 'green', 
                        icon : 'buy',
                        text : 'Buy',
                        coin : 'USDSC'
                    }
                    : {
                        textColor : 'red', 
                        icon : 'sell',
                        text : 'Sell',
                        coin : 'PALM'
                    }
        
        return {
            config
        }
    }
}
</script>

<style lang="scss" scoped>
    .input-append {
        height: calc(100%);
        position: absolute;
        display: flex;
        align-items: center;
        padding: 3px 10px;
        background: #0f210d;
        font-size: 11px;
        top: 0;
        right: 0;
        border: 1px solid rgba(255,255,255,0.23);
        border-left: none;

        &-wrapper {
            position: relative;

            input {
                background: #0F270B;
                border: 1px solid rgba(255,255,255,0.23);
                outline: none;
                min-height: 28px;
                height: 100%;
                padding: 1px 10px;

                &[disabled] {
                    opacity: 0.5;
                }
            }
        }
    }

    .button {
        border: 1px solid #1FC87F;
        color: #1FC87F !important;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.5px;
        padding: 7.5px 50px;
        position: relative;
        border-radius: 5px;
        text-transform: uppercase;

        &.red {
            border-color: #FF3D57;
            color: #FF3D57 !important;
        }

        img {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 15px;            
        }
    }
</style>