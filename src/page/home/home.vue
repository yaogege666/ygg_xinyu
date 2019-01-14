<template>
    <div class="home">
        <home-header/>
        <div class="home-body">
            <home-menu/>
            <home-content>
                 <home-main/>
            </home-content>
        </div>
    </div>
</template>

<script>
    import HomeHeader from "./home-header";
    import HomeMenu from "./home-menu";
    import HomeContent from "./home-content";
    import HomeMain from "../admin/home-main";

    export default {
        name: "home",
        components: {HomeMain, HomeContent, HomeMenu, HomeHeader}
    }
</script>

<style lang="scss">
    .home {
        @include full;
        display: flex;
        flex-direction: column;
        .home-body {
            flex: 1;
            display: flex;
            flex-direction: row;
        }
    }
</style>
