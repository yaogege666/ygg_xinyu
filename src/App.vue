<template>
    <div class="app">
        <home/>
    </div>
</template>

<script>
    import {getModuleStore} from "./util/store";

    const {mapGetters} = getModuleStore("user")
    import Home from "./page/home/home";

    export default {
        name: "App",
        components: {Home},
        computed: {
            ...mapGetters(["userInfo"]),
        },
        created() {
            window.user = this.userInfo
        },

    }
</script>
