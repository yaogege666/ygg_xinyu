<template>
    <div class="home-content">
        <stu_detail/>
        <stu_duty/>
        <stu_score/>
        <stu_vac/>
    </div>
</template>

<script>
    import Stu_detail from "../student/stu-detail";
    import Stu_duty from "../student/stu-duty";
    import Stu_score from "../student/stu_score";
    import Stu_vac from "../student/stu_vac";

    export default {
        name: "home-content",
        components: {Stu_vac, Stu_score, Stu_duty, Stu_detail}
    }
</script>

<style lang="scss">
    .home-content {
        flex: 1;
        height: 100%;
        background-color: cadetblue;
        overflow: auto;
    }
</style>
