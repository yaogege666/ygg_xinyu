<template>
    <div class="stu-content">
        <span class="stu-detail-index">学生个人基本信息</span>
        <div class="stu-content-wrapper">
            <div class="stu-content">
                <div class="stu-content-item">姓名：小明</div>
                <br/>
                <div class="stu-content-item">班级：软件151</div>
            </div>
            <div class="stu-content">
                <div class="stu-content-item">电话号码 </div>
                <br/>
                <div class="stu-content-item">邮箱地址</div>
            </div>

            <div class="stu-content-score">
                <div class="stu-content-score-header">综合信誉考评成绩</div>
                <br/>
                <div class="stu-content-score-header">分数</div>
            </div>

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
        background-color: #f5f5ff;
        color: #0a0a26;
        .stu-content-wrapper {
            margin: 10px 45px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .stu-content {
                width: 270px;
                height: 150px;
                border: dashed 1px wheat;
                box-shadow: 7px 6px 5px #fdffee;
                padding: 10px;
                margin: 20px 20px;
                background-color: #ffffff;

                .stu-content-item {
                    padding: 10px;

                }
            }
            .stu-content-score {
                width: 270px;
                height: 150px;
                border: dashed 1px wheat;
                box-shadow: 7px 6px 5px #fdffee;
                background-color: #ffffff;
              .stu-content-score-header {
                  margin-left: 65px;
                  margin-top: 20px;

              }


            }
        }

    }
</style>
