<template>
    <div class="home">
        <home-header/>
        <div class="home-body">
            <home-menu/>
            <home-content/>
        </div>
    </div>
</template>

<script>
    import HomeHeader from "./home-header";
    import HomeMenu from "./home-menu";
    import HomeContent from "./home-content";

    export default {
        name: "home",
        components: {HomeContent, HomeMenu, HomeHeader}
    }
</script>

<style lang="scss">
    .home {
        @include full;
    }
</style>
