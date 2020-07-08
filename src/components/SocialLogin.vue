<template>
    <div>
        <div class="login-with pt-3 pb-3 d-flex align-items-center">
            <div class="line flex-1"></div>
            <span v-html="title"></span>
            <div class="line flex-1"></div>
        </div>
        <div class="social-login-buttons">
            <a href="#" class="btn-social btn-social-gplus">
                <img src="../assets/icons/g-plus.svg" class="icon" alt="" height="35">
            </a>
            <a href="#" class="btn-social btn-social-facebook">
                <img src="../assets/icons/facebook.svg" class="icon" alt="" height="30">
            </a>
            <a href="#" class="btn-social btn-social-twitter">
                <img src="../assets/icons/twitter.svg" class="icon" alt="" height="30">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props : ['title']
}
</script>

<style lang="scss" scoped>
    .login {
        &-with {
            font-size: 14px;
            width: calc(100% + 20px);
            margin: 0 -10px;

            .line { border-top: 1px solid rgba(gray, 0.6); margin: 0 10px; }
        }
    }

    .social-login-buttons {
        display: flex;
        justify-content: space-between;
    }

    .btn-social {
        margin-right: 15px;
        flex: 1;
        text-align: center;
        border-radius: 5px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-gplus { background: #df4f37; }
        &-facebook { background: #3a599d; }
        &-twitter { background: #439cd4; }
    }
</style>