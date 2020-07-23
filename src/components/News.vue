<template>
    <div class="news">
        <h2 class="page-title mb-2 mt-10 flex justify-between">
            <div class="flex items-center text-bold">
                <img src="../assets/icons/document.png" class="icon" alt="" style="width: 20px">
                News
            </div>

            <div class="flex arrows">
                <img src="../assets/icons/slider-arrow.png" alt="">
                <img src="../assets/icons/slider-arrow.png" style="transform: rotate(180deg)" alt="">
            </div>
        </h2>

        <div class="card overflow-hidden h-auto">
            <div class="slider">
                <div class="slide" v-for="(post) in news" :key="post.id">
                    <div class="slide__image-wrapper">
                        <img class="slide__image" src="https://via.placeholder.com/600/771796" alt="">
                    </div>
                    <h4 class="slide__title font-bold" v-html="post.title"></h4>
                    <p v-html="post.body"></p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'News',
    data() {
        return {
            currentSlide : 0,
            news : [],
        }
    },
    mounted () {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => response.json())
        .then((json) => this.news = json)
    }
}
</script>

<style lang="scss">
    .news {
        .arrows img {
            width: 45px;
            margin: 0;
        }

        .slider {
            display: flex;
            overflow-x: hidden;
            scroll-behavior: smooth;
            height: 100%;
        }

        .slide {
            position: relative;
            flex: 0 0 100%;
            max-width: 100%;

            &__title {
                font-size: 20px;
                line-height: 1.2;
            }

            &__image {
                position: absolute;
                top: 0;
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 12px;

                &-wrapper {
                    position: relative;
                    padding-top: 56%;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>