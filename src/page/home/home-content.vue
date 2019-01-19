<template>
    <div class="home-content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Stu_content from "../student/stu-content";
    import Stu_echart from "../student/stu-echart";
    import Stu_evaluation from "../student/stu-evaluation";
    import Stu_absence from "../student/stu-absence";

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
        & > div {
            padding: 20px;
            padding-left: 8px;
            .el-card {
                margin-bottom: 12px;
            }
        }
    }
</style>
