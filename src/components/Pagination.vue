<template>
    <div class="pagination">
        <a href="#" class="page">1</a>
        
        <a href="#" class="page">...</a>

        <a href="#" class="page" :class="{ 'current' : page % 27 == 0}" v-for="page in [23,24,25,26,27,28,29]" :key="page">
            {{ page }}
        </a>

        <a href="#" class="page">...</a>
        <a href="#" class="page">32</a>
    </div>
</template>

<script>
// import api from '@/api'

export default {
    name: 'Pagination',
    props : [ 'pages', 'currentPage' ],
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .pagination {
        display: flex;
        
        .page {
            border-radius: 50%;
            display: flex;
            align-items: center;
            height: 54px;
            width: 54px;
            align-items: center;
            justify-content: center;
            font-size: 22px;

            &.current {
                background: #1D3106;
                font-weight: bold;
                pointer-events: none;
            }
        }

    }
</style>
