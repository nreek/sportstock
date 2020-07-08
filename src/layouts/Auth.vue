<template>
    <div class="page-auth">
        <div class="auth-content">
            <slot></slot>

            <p class="text-secondary d-block fz-14 mt-5">By signing-up, you agree to our <br> <a href="#" class="text-white">Terms and Conditions</a> & <a href="#" class="text-white">Privacy Policy</a></p>
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
            background-color: rgba(#1F1234, 0.9);
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
                border: 1px solid #402A5B;
                border-radius: 7px;
                background-color: #170D28;
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
                    border: 1px solid #6C4A8F;
                    background-color: rgba(#291840, 0.5);
                    color: #A87AD2 !important;
                }
            }
        }
    }

    .auth-content {
        width: 100%;
        max-width: 357px;
        position: relative;
        z-index: 10;
    }
</style>