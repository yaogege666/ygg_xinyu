<template>
    <div class="home">
        <div class="test-box">
            <button @click="requestServer">请求服务器</button>
            <y-radio
                    v-model="active"

                    active-icon="icon-heart"
                    inactive-icon="icon-yidiandiantubiao09"/>

            <y-radio
                    :value="!active"
                    @input="val=>active = !val"

                    active-icon="icon-heart"
                    inactive-icon="icon-yidiandiantubiao09"/>
        </div>

    </div>
</template>

<script>
    import YIcon from "../../components/y-icon";
    import YRadio from "../../components/y-radio";
    import YRadio01 from "../../components/y-radio01";

    export default {
        name: "home",
        components: {YRadio01, YRadio, YIcon},
        data() {
            return {
                active: null,
            }
        },
        methods: {
            requestServer() {
                setTimeout(() => {
                    this.active = true
                }, 1000)
            },
        }
    }
</script>

<style lang="scss">
    .home {
        height: 100%;
        width: 100%;

    }

    .test-box {
        height: 100%;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 60px;
        color: blueviolet;

        .title {
            color: white;
            font-size: 48px;
            margin-left: 0px;
        }
    }
</style>
