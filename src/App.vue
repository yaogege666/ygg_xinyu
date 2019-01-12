<template>
    <div class="app">
        <home/>
    </div>
</template>

<script>
    import Home from "./page/home/home";

    export default {
        name: "App",
        components: {Home}
    }
</script>

<style lang="scss">
    html, body, .app {
        @include full;
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
        div {
            box-sizing: border-box;
        }
    }
</style>
