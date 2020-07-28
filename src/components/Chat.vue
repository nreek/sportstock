<template>
    <div class="chat">
        <div class="chat-bubble" @click="active = !active">
            <img src="../assets/icons/megaphone.svg" class="icon" alt="">

            <div class="counter">99+</div>
        </div>

        <div class="chat-panel" :class="{ 'active' : active }">
            <div class="chat-panel__wrapper">
                <div class="chat-panel__header">
                    <a href="javascript:void(0);" v-for="type in types" :key="type.color" :class="`ct-${type.color}`">{{ type.title }}</a>
                </div>
                <div class="chat-panel__body">
                    <div class="message" v-for="(message, index) in messages" :key="`message-${index}`">
                        <img class="message-picture" src="https://via.placeholder.com/30/771796" />
                        <div class="flex-1">
                            <span class="message-time">2:07 PM </span>
                            <span class="message-user font-bold" :style="{ 'color' : message.user_color }">{{ message.user }}: </span>
                            <span class="message-text" :class="`ct-${message.type}`" v-html="message.text"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Chat',
    data() {
        return {
            active : false,
            types : [
                { title : 'General', color : 'white' },
                { title : 'Match', color : 'orange' },
                { title : 'Team', color : 'blue' },
                { title : 'Group', color : 'green' },
                { title : 'Whisper', color : 'pink' },
            ],
            messages : [
                {
                    user : 'Djpurity059',
                    user_color : '#D0021B',
                    type : 'white',
                    text : `Plan on sh*t posting? Here's why it doesn't work.`
                },
                {
                    user : 'fsrad',
                    user_color : '#AB2FBA',
                    type : 'orange',
                    text : `I don't know anything about tracking chickens, I just did it for the free liquor`
                },
                {
                    user : 'Hasn42342',
                    user_color : '#00B0FF',
                    type : 'blue',
                    text : `I think this is actually the exact moment Trevor notices the mushroom`
                },
                {
                    user : 'Killzorg',
                    user_color : '#03C6CC',
                    type : 'white',
                    text : `Way she goes boys`
                },
                {
                    user : 'RPMGamer',
                    user_color : '#03CC3C',
                    type : 'pink',
                    text : `Ten bucks or six Dairy Queen coupons`
                },
                {
                    user : 'DeathDie',
                    user_color : '#2BA04C',
                    type : 'green',
                    text : `Keep moving I got a mouth to feed.`
                },
            ]
        }
    },
}
</script>

<style lang="scss">

    #app .message {
        display: flex;
        align-items: flex-start;
        margin-bottom: 5px;

        &-picture {
            margin-right: 8px;
            height: 25px;
            max-width: 25px;
            flex: 0 0 25px;
            border-radius: 2px;
        }

        &-time {
            font-size: 10px;
            color: rgba(255,255,255,0.5);
            vertical-align: -1px;
        }
    }

    #app .chat {
        position: fixed;
        right: 30px;
        bottom: 30px;
         
        &-panel {
            max-width: 400px;
            background-color: rgba(19,20,23,0.97);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            color: white;
            position: fixed;
            right: 140px;
            bottom: 70px;
            border-radius: 50%;
            transition: all .6s;
            width: 0;
            max-height: 0;
            overflow: hidden;
            opacity: 0;

            &.active {
                border-radius: 10px;
                width: calc(100vw - 80px);
                max-height: 600px;
                opacity: 1;
            }

            @media screen and (Max-width: 768px) {
                right: 70px;
            }

            &__wrapper {
                width: calc(100vw - 80px);
                max-height: 600px;   
                max-width: 400px;
            }

            &__header {
                padding: 10px 20px;
                border-radius: 10px 10px 0 0;
                background-color: rgba(51,246,245,0.08);
                display: flex;
                justify-content: space-around;
                font-size: 12px;
                font-weight: bold;
            }

            &__body {
                max-height: 500px;
                overflow-y: auto;
                padding: 15px 40px;
                font-size: 13px;
            }
        }

        &-bubble {
            border-radius: 50%;
            border: 4px solid white;
            width: 100px;
            height: 100px;
            background: linear-gradient(41.22deg, #F23345 0%, #2CDB00 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: fixed;
            bottom: 30px;
            right: 30px; 

            @media screen and (max-width: 768px) {
                width: 70px;
                height: 70px;
            }   
        }

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

        .ct-white { color: white; }
        .ct-orange { color: #FF7C00; }
        .ct-blue { color: #01A6EF; }
        .ct-green { color: #83FB47; }
        .ct-pink { color: #F481FF; }
    }
</style>