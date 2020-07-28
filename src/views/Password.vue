<template>
    <div style="margin-bottom: 80px;">
        <h3 class="fw-bold mt-2 mb-4">Forgot Password?</h3>

        <form action="">
            <input type="text" placeholder="E-mail" class="form-control mb-3" v-model="form.email">

            <router-link to="/wallets" class="btn-auth primary">Reset Password</router-link>
            <router-link to="/login" class="btn-auth secondary">Go Back</router-link>
        </form>
    </div>
</template>

<script>
export default {
    name : 'Login',
    data () {
        return {
            form : {
                remember : false,
            }
        }
    }
}
</script>