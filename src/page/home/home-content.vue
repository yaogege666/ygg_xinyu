<template>
    <div class="home-content">
        <router-view></router-view>
    </div>
</template>

<script>
    import Stu_content from "../student/stu-content";


    export default {
        name: "home-content",
        components: { Stu_content}
    }
</script>

<style lang="scss">
    .home-content {
        /*flex: 1;*/
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 12px;
    }
</style>
