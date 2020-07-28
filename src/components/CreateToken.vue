<template>
    <div class="create-token">
        <div class="create-token__modal-wrapper modal-shadow" :class="{ 'open' : creatingToken }"></div>
        <div class="create-token__modal modal" :class="{ 'open' : creatingToken }">
            <div class="close rounded-full border-4 border-white flex items-center justify-center" @click="$store.commit('SET_CREATE_TOKEN', false)">&times;</div>
            <div class="modal__header">
                STEP 01/03 - TOKEN CONFIGURATION
            </div>
            <div class="modal__body">
                <p class="mb-6">We will start setting up your token, but first you will need to fill out the profile. Select the asset tokenized below:</p>

                <div class="flex justify-around mb-8">
                    <a href="javascript:void(0);" class="btn" :class="{'selected' : selected == 'player' }" @click="selected = 'player'">
                        <img src="../assets/icons/create-player.png" class="mr-3" alt="">
                        <span>Player Token</span>
                    </a>
                    <a href="javascript:void(0);" class="btn" :class="{'selected' : selected == 'team' }" @click="selected = 'team'">
                        <img src="../assets/icons/create-team.png" class="mr-3" alt="">
                        <span>Team Token</span>
                    </a>
                </div>

                <div class="flex items-center">
                    <div class="flex-1">
                        <label for="confirm" class="coin-toggle ml-3">
                            <input id="confirm" class="toggle-checkbox" type="checkbox">
                            <div class="toggle-switch"></div>
                        </label>
                        <span style="font-size: 14px;" class="ml-2">
                            I confirm that I have read and agree to the <a href="#" class="text-green">terms of use</a> and <a href="#" class="text-green">privacy policies</a> of this site.
                        </span>
                    </div>

                    <a href="#" class="button">Next Step</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name : 'CreateToken',
    data(){
        return {
            selected : ''
        }
    },
    watch : {
        creatingToken () {
            this.selected = this.creatingToken
        }
    },
    computed : {
        ...mapGetters([ 'creatingToken' ])
    },
}
</script>

<style lang="scss" scoped>
    .btn{
        flex: 0 0 calc(50% - 30px);
        border: 2px solid #2F5009;
        border-radius: 9px;
        padding: 18px;
        font-size: 29px;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;

        &.selected {
            border-color: #F59223;
        }

        img {
            width: 50px;
        }

        @media screen and (max-width: 768px) {
            font-size: 20px;
            padding: 10px 15px;

            img { width: 25px; }
        }
    }

    .button {
        border-radius: 14px;
        background: linear-gradient(270deg, #D4224C 0%, #5A0C15 100%);
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 40px;
        display: inline-block;
    }

    .close {
        width: 46px;
        height: 46px;
        font-size: 30px;
        font-weight: bold;
        padding-bottom: 5px ;
    }

    .modal {
        &__header {
            font-size: 19px;
            font-weight: 900;
            letter-spacing: 0.3px;
            padding: 40px;
            background: #172803;

            @media (max-width: 768px) {
                padding: 15px 25px;
            }
        }

        &__body {
            background-color: #142303;
            padding: 40px;
            font-size: 19px;
        }
    }
</style>