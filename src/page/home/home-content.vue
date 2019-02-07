<template>
    <div class="home-content">
        <router-view></router-view>
    </div>
</template>

<script>
    import Stu_content from "../student/stu-content";
    import Stu_echart from "../student/stu-echart";
    import Stu_evaluation from "../student/stu-evaluation";
    import Stu_absence from "../student/stu-leave";

    export default {
        name: "home-content",
        components: {Stu_absence, Stu_evaluation, Stu_echart, Stu_content}
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
