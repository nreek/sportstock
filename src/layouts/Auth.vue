<template>
    <div class="page-auth">
        <div class="auth-content">
            <div class="auth-header">
                <img src="../assets/images/logo-dark.png" alt="" class="logo" width="180">
            </div>
            <div class="auth-body">
                <slot></slot>
            </div>
            <br>
            <p class="text-secondary text-center d-block fz-14 mt-2">By signing-up, you agree to our <br> <a href="#" class="text-white">Terms and Conditions</a> & <a href="#" class="text-white">Privacy Policy</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Auth'
}
</script>

<style lang="scss" scoped>
    .page-auth {
        background-image: url('../assets/images/auth-bg.jpg');
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: Arial;

        &, &::after {
            width: 100vw;
            height: 100vh;
            background-repeat: no-repeat;
        }

        &::after {
            content : '';
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(#233A09, 0.9);
            background-size: contain;
            background-position: right bottom;
            background-image: url('../assets/images/auth-texture.png');
            z-index: 1;
        }

        /deep/ {
            .form-control {
                border-radius: 5px;
                width: 100%;
                max-width: none;
                height: 50px;
            }

            .btn-auth {
                height: 50px;
                width: 133px;
                border: 1px solid #32ED00;
                border-radius: 7px;
                background-color: #2cd200;
                display: flex;
                float: left;
                margin-right: 15px;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                font-size: 14px;
                color: white;
                
                &:hover { color: white !important }

                &.secondary {
                    border: 1px solid #32ED00;
                    background-color: rgba(#2cd200, 0.5);
                    color: white !important;
                }
            }
        }
    }

    .auth-content {
        width: 100%;
        position: relative;
        z-index: 10;
        background: #233A09;
        max-width: 450px;
        border-radius: 20px;
        box-shadow: 0 5px 30px #00000033;
        padding-bottom: 20px;
        max-height: 90vh;
        overflow-x: auto;

        .auth-header {
            display: flex;
            justify-content: center;
            background: #1e3107;
            border-radius: 20px 20px 0 0;
            padding: 5px 20px;
        }

        .auth-body {
            padding: 10px 40px 0 40px;
        }
    }
</style>