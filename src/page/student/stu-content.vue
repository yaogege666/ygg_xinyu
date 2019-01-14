<template>
    <div class="stu-content">
        <span class="stu-detail-index">学生个人基本信息</span>
        <div class="stu-content-wrapper">
            <div class="stu-content">
                <div class="stu_content-item">姓名：小明</div> &nbsp;&nbsp;&nbsp;
                <div class="stu_content-item">班级：大二</div>
            </div>
            <div class="stu-content">出勤天数</div>
            <div class="stu-content">
                <div>综合信誉考评成绩</div>
            </div>
            <div class="stu-content">综合评定等级</div>
        </div>
        <stu_score/>
        <stu-echart/>
        <stu_absence/>
    </div>
</template>
<script>
    import Stu_score from "./stu-score";
    import StuEchart from "./stu-echart";
    import Stu_absence from "./stu-absence";

    export default {
        name: "stu_content",
        components: {Stu_absence, StuEchart, Stu_score}
    }
</script>

<style lang="scss">
    .stu-content {
        width: 100%;
        background-color: #d7dfe2;
        color: red;
        .stu-content-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .stu-content {
                width: 270px;
                height: 150px;
                border: dashed 1px wheat;
                box-shadow: 7px 6px 5px #fdffee;
                margin: 20px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                float: left;
            }
        }

    }
</style>
