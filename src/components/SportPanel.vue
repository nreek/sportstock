<template> 
    <div class="sport-panel">
        <div class="sport-panel__header">
            <img :src="icon" class="icon mr-2" width="24" alt="">
            <span v-html="title"></span>
        </div>
        <div class="sport-panel__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'SportPanel',
    props : [ 'title', 'icon'  ]
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .sport-panel {
        &__header {
            display: flex;
            align-items: center;
            font-size: 19px;
            font-weight: 900;
            letter-spacing: 0.3px;
            padding: 20px;
            background: linear-gradient(90deg, #466424 0%, #27410a 100%);
        }

        &__body {
            padding: 15px;
        }
    }
</style>