<template>
    <div class="login">
        <img src="../assets/images/logo-small.png" alt="" class="logo" width="50">
        <h4 class="fw-bold mt-2 mb-4">Sign Up</h4>

        <ValidationObserver v-slot="{ handleSubmit }">
            <form class="form" @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider name="first name" rules="required" v-slot="{ errors }" class="mb-3">
                    <input type="text" placeholder="First name" class="form-control" v-model="form.first_name" required>
                    <span class="error">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="last name" rules="required" v-slot="{ errors }" class="mb-3">
                    <input type="text" placeholder="Last name" class="form-control" v-model="form.last_name" required>
                    <span class="error">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="e-mail" rules="required|email" v-slot="{ errors }" class="mb-3">
                    <input type="email" placeholder="E-mail" class="form-control" v-model="form.email" required>
                    <span class="error">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationObserver>
                    <ValidationProvider name="password" rules="confirmed:password_confirmation" v-slot="{ errors }">
                        <password v-model="form.password" defaultClass="form-control" :badge="true" :toggle="true" />
                        <span class="error" style="margin-top: -10px;margin-bottom: 15px;display: block;">{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" vid="password_confirmation" class="mb-3">
                        <input type="password" placeholder="Password Confirmation" class="form-control" v-model="form.password_confirmation">
                        <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </ValidationObserver>
                
                <button type="submit" class="btn btn-auth primary" value="Login" v-html="!loading ? 'Register' : `<img src='${require('../assets/images/spinner.svg')}' width='25'>`" :disabled="loading"></button>
                <router-link to="/login" class="btn-auth secondary">Sign In</router-link>
            </form>
        </ValidationObserver>
        <SocialLogin title="Register With:"></SocialLogin>       
    </div>
</template>

<script>
import Password from 'vue-password-strength-meter'

import { mapActions } from 'vuex'
import { openAPI, oauth } from '@/api'
import SocialLogin from '@/components/SocialLogin'

export default {
    name : 'Login',
    components : { SocialLogin, Password },
    data () {
        return {
            loading: false,
            form : {
                remember : false,
                first_name : '',
                last_name : '', 
                email : '',
                password : '',
                password_confirmation : '',
            }
        }
    },
    methods : {
        ...mapActions([ 'setToken' ]),
        onSubmit () {
            this.loading = true
            openAPI.post('register', {
                ...this.form, 
                email_confirmation : this.form.email
            })
            .then ( () => {
                oauth.post('/token', { username : this.form.email, password: this.form.password }).then(r => {
                    this.loading = false
                    if(r.token_type && r.access_token && r.token_type == "Bearer") {
                        this.setToken(r.access_token)
                        this.$router.push('/')
                    }
                })
            } )
        }
    }

}
</script>

<style lang="scss" scoped>
    .login {
        .form {
            span.mb-3 {
                display: block;
            }
        }
        /deep/ {
            .Password__strength-meter {
                background: rgba(255, 255, 255, 0.3);
                height: 6px;

                &:after, &:before {
                    border-color: #2a1e3f;
                }
            }
        }
    }
</style>