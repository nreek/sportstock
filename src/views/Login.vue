<template>
    <div class="login">
        <h5 class="fw-bold mt-2 mb-4 text-center">Sign In</h5>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="form" @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider name="e-mail" rules="required" v-slot="{ errors }" class="mb-3">
                    <input type="text" placeholder="E-mail" class="form-control mb-3" v-model="form.username">
                    <span class="error">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="password" rules="required" v-slot="{ errors }" class="mb-3">
                    <input type="password" placeholder="Password" class="form-control" v-model="form.password">
                    <span class="error">{{ errors[0] }}</span>
                </ValidationProvider>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="coin-checkbox mb-3 mt-3">
                        <input type="checkbox" id="wallets-hide-zero" v-model="remember">
                        <label for="wallets-hide-zero">Remember-me</label>
                    </div>

                    <router-link to="/reset-password" class="text-white fz-14">Forgot password?</router-link>
                </div>

                <button type="submit"  class="btn btn-auth primary" value="Login" v-html="!loading ? 'Login' : `<img src='${require('../assets/images/spinner.svg')}' width='25'>`" :disabled="loading"></button>
                <router-link to="/register" class="btn-auth secondary">Sign Up</router-link>
            </form>
        </ValidationObserver>
        <SocialLogin title="Login with:"></SocialLogin>       
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import SocialLogin from '@/components/SocialLogin'
import { oauth } from '@/api'

export default {
    name : 'Login',
    components : { SocialLogin },
    data () {
        return {
            remember : false,
            loading: false,
            form : {
                username: '',
                password: ''
            }
        }
    },
    methods: { 
        ...mapActions([ 'setToken' ]),
        onSubmit() {
            this.loading = true

            oauth.post('/token', this.form).then(r => {
                this.loading = false
                if(r.token_type && r.access_token && r.token_type == "Bearer") {
                    this.setToken(r.access_token)
                    this.$router.push('/')
                }
            })
        }
    }
}
</script>