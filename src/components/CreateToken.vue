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

                    <div class="flex justify-around mt-6 mb-5 md:flex-row flex-col">
                        <div class="btn-gradient-wrapper mb-3 md:mb-0" :class="{'selected' : register.type == 1 }">
                            <a href="javascript:void(0);" class="btn" @click="register.type = 1">
                                <img src="../assets/icons/create-player.png" class="mr-3" alt="">
                                <span>Player Token</span>
                            </a>
                        </div>
                        <div class="btn-gradient-wrapper mb-3 md:mb-0" :class="{'selected' : register.type == 2 }">
                            <a href="javascript:void(0);" class="btn" :class="{'selected' : register.type == 2 }" @click="register.type = 2">
                                <img src="../assets/icons/create-team.png" class="mr-3" alt="">
                                <span>Team Token</span>
                            </a>
                        </div>
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
                        <div class="col-md-6 mb-3 md:mb-0">
                            <label for="" class="block">Token Name</label>
                            <input type="text" v-model="register.name" placeholder="Ex.: Neymar Token" style="max-width: 100%">
                        </div>
                        <div class="col-md-6 mb-3 md:mb-0">
                            <label for="" class="block">Token Symbol</label>
                            <input type="text" v-model="register.symbol" placeholder="Ex.: NJR" style="max-width: 100%">
                        </div>
                        <div class="col-md-6 mb-3 md:mb-0">
                            <label for="" class="block">Description</label>
                            <input type="text" v-model="register.description" style="max-width: 100%">
                        </div>
                        <div class="col-md-6 mb-3 md:mb-0">
                            <label for="" class="block">Full Name Owner</label>
                            <input type="text" v-model="register.full_name" placeholder="Ex.: Neymar Junior" style="max-width: 100%">
                        </div>

                        <div class="col-md-12 flex items-center justify-between flex-wrap">
                            <a href="javascript:void(0);" class="font-bold mr-3" @click="setStep('back')">Go Back</a>
                            <a href="javascript:void(0);" class="button" @click="registerToken">Next Step</a>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <div class="row">
                         <div class="col-md-12">
                            <div class="flex items-center mb-1">
                                <img src="../assets/icons/upload.png" width="25" class="mr-2" alt="">
                                <label for="" class="font-bold">Upload your documents:</label>
                            </div>

                            <!-- <div class="upload p-3">
                                <div class="placeholder flex justify-center items-center h-full cursor-pointer">
                                    <img src="../assets/icons/upload.svg" class="icon opacity-25 mr-3" alt="">
                                    <span>Click here or drag the files</span>
                                </div>
                            </div> -->
                        </div>
                        <div class="document-type text-center col-md-6" v-for="document in documentTypes" :key="document.id">
                            <div class="upload">
                                <label for="" v-html="document.name"></label>
                                <p v-html="document.description"></p>
                                <img :src="document.image_example" alt="" class="block m-auto mb-2">
                                <input type="file" :name="document.type" @change="(event) => documentChange(event.target.files, document)">
                            </div>
                        </div>
                        <div class="col-md-12 mt-8 flex items-center justify-between flex-wrap">
                            <div class="flex items-center w-full md:w-2/3 mb-3 md:mb-0 mr-3">
                                <img src="../assets/icons/warning-green.png" width="40" class="mr-2" alt="">
                                <span class="fz-14 opacity-50">You must send a double-sided copy of your identification document and a selfie holding the same document next to your face.</span>
                            </div>
                            <a href="javascript:void(0);" class="font-bold mr-3" @click="setStep('back')">Go Back</a>
                            <a href="javascript:void(0);" class="button" @click="documentStore">Next Step</a>
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
import api from '@/api'

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
            register : {
                type : '1',
                name : 'neymar jr',
                symbol : 'njr',
                full_name : 'neymar_jr',
                description : 'desc do neymar jr',
            }, 
            documents : [],
            token : false,
            documentTypes : false
        }
    },
    watch : {
        creatingToken (newVal, oldVal) {
            if(oldVal === false) {
                this.$refs.steps.scrollLeft = 0;
            }
            this.register.type = this.creatingToken
        }
    },
    computed : {
        ...mapGetters([ 'creatingToken' ])
    },
    async mounted () {
        this.documentTypes = await api.get(`document-types/token`)
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
        async registerToken() {
            this.token = await api.post('token/register', this.register)

            if(this.token && this.token.id) {
                this.setStep('next')
            }
        },
        documentChange(file, document) {
            // this.documents = [...this.documents, { document : , document_type_id : document.id, currency_id : this.token.id } ]
            let headers = { "Content-Type" : 'application/x-www-form-urlencoded', "Accept" : 'application/json', "Authorization": `Bearer ${window.localStorage.getItem('token')}`, "mimeType": 'multipart/form-data' }
            let proxyUrl = 'https://afternoon-beyond-74473.herokuapp.com/'
            let form = new FormData();

            form.append('document', file[0]);
            form.append('document_type_id', document.id);
            form.append('currency_id', this.token.id);

            fetch(proxyUrl + 'https://dev.usdsoccer.io/api/document/store', {
                method: 'POST',
                headers,
                body: form,
                redirect: 'follow'
            })
            .then( response => { 
                response.json().then( data => console.log(data) )
            })
            .catch( response => console.log(response))
        },
        async documentStore () {
            
        }
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
        padding: 15px;
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

    .btn-gradient-wrapper {
        padding: 1.5px 2px;
        border-radius: 9px;
        flex: 0 0 calc(50% - 30px);
        max-width: calc(50% - 30px);
        background: #2F5009;

        &.selected {
            background: linear-gradient(90deg, #F23345 0%, #2CDB00 100%);
        }
    }

    .btn{
        border-radius: 9px;
        padding: 18px;
        font-size: 29px;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #142303;
        height: 100%;
        width: 100%;
        
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

    .document-type {
        p, input {
            font-size: 14px;
        }

        img { max-height: 250px; }
    }
</style>