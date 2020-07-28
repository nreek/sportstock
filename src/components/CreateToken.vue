<template>
    <div class="create-token">
        <div class="create-token__modal-wrapper modal-shadow" :class="{ 'open' : creatingToken }"></div>
        <div class="create-token__modal modal" ref="modal" :class="{ 'open' : creatingToken }">
            <div class="close rounded-full border-4 border-white flex items-center justify-center" @click="$store.commit('SET_CREATE_TOKEN', false)">&times;</div>
            <div class="modal__header">
                {{ steps[activeStep] }}
            </div>
            <div class="modal__body steps" ref="steps">

                <div class="step">
                    <p class="mb-3 md:mb-6 md:mt-12">We will start setting up your token, but first you will need to fill out the profile. Select the asset tokenized below:</p>

                    <div class="flex justify-around mb-8 md:flex-row flex-col">
                        <a href="javascript:void(0);" class="btn mb-3 md:mb-0" :class="{'selected' : selected == 'player' }" @click="selected = 'player'">
                            <img src="../assets/icons/create-player.png" class="mr-3" alt="">
                            <span>Player Token</span>
                        </a>
                        <a href="javascript:void(0);" class="btn" :class="{'selected' : selected == 'team' }" @click="selected = 'team'">
                            <img src="../assets/icons/create-team.png" class="mr-3" alt="">
                            <span>Team Token</span>
                        </a>
                    </div>

                    <div class="flex items-center flex-col md:flex-row">
                        <div class="flex-1 mb-3 md:mb-0">
                            <label for="confirm" class="coin-toggle ml-3">
                                <input id="confirm" class="toggle-checkbox" type="checkbox">
                                <div class="toggle-switch"></div>
                            </label>
                            <span style="font-size: 14px;" class="ml-2">
                                I confirm that I have read and agree to the <a href="#" class="text-green">terms of use</a> and <a href="#" class="text-green">privacy policies</a> of this site.
                            </span>
                        </div>

                        <a href="javascript:void(0);" class="button" @click="setStep('next')">Next Step</a>
                    </div>
                </div>

                <div class="step">
                    <div class="row">
                        <div class="col-md-4 mb-3 md:mb-0">
                            <label for="">Token Name</label>
                            <input type="text" placeholder="Ex.: Neymar Token">
                        </div>
                        <div class="col-md-4 mb-3 md:mb-0">
                            <label for="">Token Symbol</label>
                            <input type="text" placeholder="Ex.: NJR">
                        </div>
                        <div class="col-md-4 mb-3 md:mb-0">
                            <label for="">Full Name Owner</label>
                            <input type="text" placeholder="Ex.: Neymar Junior">
                        </div>

                        <div class="col-md-12 mt-4 mb-8">
                            <div class="flex items-center mb-3">
                                <img src="../assets/icons/upload.png" width="25" class="mr-2" alt="">
                                <label for="">Upload your documents:</label>
                            </div>

                            <div class="upload p-3">
                                <div class="placeholder flex justify-center items-center h-full cursor-pointer">
                                    <img src="../assets/icons/upload.svg" class="icon opacity-25 mr-3" alt="">
                                    <span>Click here or drag the files</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 flex items-center justify-between flex-wrap">
                            <div class="flex items-center w-full md:w-2/3 mb-3 md:mb-0 mr-3">
                                <img src="../assets/icons/warning-green.png" width="40" class="mr-2" alt="">
                                <span class="fz-14 opacity-50">You must send a double-sided copy of your identification document and a selfie holding the same document next to your face.</span>
                            </div>
                            <a href="javascript:void(0);" class="font-bold mr-3" @click="setStep('back')">Go Back</a>
                            <a href="javascript:void(0);" class="button" @click="setStep('next')">Next Step</a>
                        </div>
                    </div>
                </div>

                <div class="step h-full">
                    <div class="row flex items-center justify-center flex-col mt-6">
                        <h3 class="text-center mb-3">Your token was successfully created</h3>
                        <a href="javascript:void(0);" class="button" @click="$store.commit('SET_CREATE_TOKEN', false)">Close</a>
                    </div>
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
            steps : [
                'STEP 01/03 - TOKEN INFORMATION',
                'STEP 02/03 - TOKEN CONFIGURATION',
                'STEP 03/03 - TOKEN CONFIRMATION',
            ],
            activeStep : 0,
            selected : ''
        }
    },
    watch : {
        creatingToken (newVal, oldVal) {
            if(oldVal === false) {
                this.$refs.steps.scrollLeft = 0;
            }
            this.selected = this.creatingToken
        }
    },
    computed : {
        ...mapGetters([ 'creatingToken' ])
    },
    methods : {
        setStep(direction) {
            if(direction == 'next') {
                this.activeStep++;
            } else {
                this.activeStep--;
            }
            this.$refs.modal.scrollTop = 0;
            this.$refs.steps.scrollLeft = this.$refs.steps.offsetWidth * this.activeStep;
        },
    }
}
</script>

<style lang="scss" scoped>
    .steps {
        display: flex;
        overflow: hidden;
        scroll-behavior: smooth;

        .step {
            height: 100%;
            flex: 0 0 100%;
            max-width: 100%;
            padding: 40px;

            @media screen and (max-width: 768px){
                padding: 15px 30px;
            }
        }
    }

    .upload {
        border-radius: 9px;
        border: 1px solid rgba(255,255,255,0.21);
        width: 100%;
        height: 140px;
        background-image: linear-gradient(45deg, rgba(255,255,255, 0.02) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255, 0.02) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255, 0.02) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255, 0.02) 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

        .placeholder {
            span {
                opacity: 0.43;
                font-size: 19px;
                font-weight: 300;
                letter-spacing: 1.9px;
            }
        }
    }

    input[type=text] {
        height: 62px;
        border: 1px solid rgba(255,255,255,0.21);
        border-radius: 9px;
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 1.5px;
        padding: 5px 15px;
        margin-top: 5px;
        outline: none;
    }

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
            font-size: 19px;
        }
    }
</style>