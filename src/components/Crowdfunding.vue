<template>
    <div class="crowdfunding">
        <h2 class="page-title mb-4 mt-10 flex justify-between">
            <div class="flex items-center text-bold">
                <img src="../assets/icons/document.png" class="icon" alt="" style="width: 20px">
                Crowdfunding
            </div>
        </h2>

        <div class="card overflow-hidden h-auto">
            <div class="player-team p-4 flex items-center justify-between">
                <div class="text-center">
                    <img src="../assets/images/miranda.png" alt="">
                    <p class="lh-1 mt-3 mb-0">Soccer Player</p>
                    <p class="font-bold">Miranda</p>
                </div>
                <img src="../assets/icons/switch.png" alt="">
                <div class="text-center">
                    <img src="../assets/images/spfc.png" alt="">
                    <p class="lh-1 mt-3 mb-0">Sport Club</p>
                    <p class="font-bold">São Paulo</p>
                </div>
            </div>

            <div class="card__footer">
                <div class="flex items-center fz-21">
                    <img src="../assets/icons/clock.png" alt="" class="mr-3">
                    <p class="lh-1">End in <span class="text-green mr-3">12:33:21</span></p>
                <a href="#" class="btn-border-gradient"><span>Contribute</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Crowdfunding',
}
</script>

<style lang="scss">
    .crowdfunding {
        .card { padding: 0; }

        .card__footer { 
            background: #1B2C07; 
            padding: 25px;
        }
    }
</style>