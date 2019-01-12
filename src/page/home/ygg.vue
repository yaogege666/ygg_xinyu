<template>
    <div class="ygg">
        <y-radio01
         v-model="ygg"
         true-icon="icon-fensi"
         false-icon="icon-candan"
        >
        </y-radio01>
    </div>
</template>

<script>
    import YRadio01 from "../../components/y-radio01";
    export default {
        name: "ygg",
        components: {YRadio01},
        data() {
            return {
                ygg: null
            }
        }
    }
</script>

<style lang="scss">
    .home {
        height: 100%;
        width: 100%;

    }

    .ygg {
        height: 100%;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 60px;
        color: #96e270;

    }
</style>
