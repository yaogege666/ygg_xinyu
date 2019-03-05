<template>
    <div class="message">
        <div class="item">
            同学你好，因你信誉的分总分低于50分，特此显示此消息公告，以示警示！望改正！
        </div>

        <div class="message-date">
            警告时间：{{user.updatedAt}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "message",
        data() {
            return {
                user: user
            }

        }

    }
</script>

<style lang="scss">
    .message {
        width: 900px;
        height: 600px;
        font-weight: bold;
        margin-left: 200px;
        background-color: #ffffff;
        .item {
            font-size: 20px;
            padding-top: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .message-date {
            color: red;
            margin-top: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 10px;

        }
    }
</style>
