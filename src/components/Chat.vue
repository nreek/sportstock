<template>
    <div class="chat">
        <div class="chat-bubble">
            <img src="../assets/icons/megaphone.svg" class="icon" alt="">

            <div class="counter">99+</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Chat',
    data() {
    },
}
</script>

<style lang="scss">
    .chat {
        border-radius: 50%;
        border: 4px solid white;
        width: 100px;
        height: 100px;
        background: linear-gradient(41.22deg, #F23345 0%, #2CDB00 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        right: 30px;
        bottom: 30px;
        cursor: pointer;

        img { width: 50px; }

        .counter {
            border-radius: 13px;
            background-color: #DE272E;
            position: fixed;
            bottom: 110px;
            right: 30px;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 1.3px;
            padding: 3px 12px;
        }

        @media screen and (max-width: 768px){
            width: 60px;
            height: 60px;

            img { width: 30px; }

            .counter { 
                bottom: 77px;
                font-size: 11px;
                padding: 1px 9px;
            }
        }
    }
</style>