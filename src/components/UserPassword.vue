<template>
    <div class="d-flex">
        <div v-if="!editing">
            <span class="d-block">Password: </span>
            <span>•••••••••••••••••••</span>
        </div>
        <div v-if="!editing" class="align-items-center d-flex ml-4">
            <img src="../assets/icons/edit.png" width="17" class="mr-2 icon" alt="">
            <a href="javascript:void(0);" class="" @click="editing = true">Change Password</a>
        </div>

        <div v-if="editing" class="w-full">
            <div class="flex mb-2 items-center">
                <label for="" class="flex-1 mr-2">Current password:</label>
                <input type="password" v-model="form.current" class="flex-1 form-control">
            </div>
            <div class="flex mb-2 items-center">
                <label for="" class="flex-1 mr-2">New password:</label>
                <input type="password" v-model="form.new_password" class="flex-1 form-control">
            </div>
            <div class="flex mb-2 items-center mb-3">
                <label for="" class="flex-1 mr-2">Repeat new password:</label>
                <input type="password" v-model="form.repeat_password" class="flex-1 form-control">
                <span v-if="message != ''">{{ message }}</span>
            </div>

            <a href="javascript:void(0);" class="btn primary" @click="update">Update password</a>
            <a href="javascript:void(0);" class="btn float-right" @click="editing = false">Cancel</a>
        </div>
    </div>
</template>

<script>
import api from '@/api'

export default {
    data() {
        return {
            editing : false,
            form : {
                current : '',
                new_password : '',
                repeat_password  : '',
            },
            message : '' 
        }
    },
    methods : {
        update(){
            if(this.new_password == this.repeat_password) {
                let { current, new_password } = this.form
                api.post('user/update_password', { current, new_password })
                .then( () => {
                    this.editing = false 
                    this.form = { }
                })
            } else {
                this.message = "The new passwords don't match"
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.btn.primary {
    background: #2bd400;
    padding: 6px 20px;
    border-radius: 8px;
    float: right;

    &:hover {
        background: #F59223 !important;
        color: white !important;
    }
}
</style>