<template>
    <div class="stu-content">
        <div class="stu-content-list">
            <div class="stu-content">
                <div class="stu-content-item">
                    <div class="stu-content-item">姓名：小明</div>
                    <div class="stu-content-item">班级：软件151</div>
                </div>
            </div>
            <div class="stu-content">
                <div class="stu-content-item">电话号码</div>
            </div>
            <div class="stu-content">
                <div class="stu-content-item">邮箱地址</div>
            </div>
            <div class="stu-content">
                <div class="stu-content-item">
                    <div class="stu-content-item">综合信誉考评成绩</div>
                    <div class="stu-content-item">分数</div>
                </div>
            </div>
        </div>
        <Stu_evaluation/>
        <stu-echart/>
        <stu-score/>
      <stu_absence/>

    </div>
</template>
<script>
    import Stu_evaluation from "./stu-evaluation";
    import StuEchart from "./stu-echart";
    import Stu_absence from "./stu-absence";
    import Stu_absence_list from "./stu-absence-list";
    import StuScore from "./stu-score";

    export default {
        name: "stu_content",
        components: {StuScore, Stu_absence_list, Stu_absence, StuEchart, Stu_evaluation}
    }
</script>

<style lang="scss">
    .stu-content {
        width: 100%;
        background-color: #eef5f9;
        color: #0a0a26;
        box-sizing: border-box;
        .stu-content-list {
            width: 100%;
            height: 156px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: white;
            box-shadow: 3px 3px 5px #ddd;
            margin-bottom: 12px;

            .stu-content {
                height: 100px;
                flex: 1;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                .stu-content-item {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }

                &:not(:last-child){
                    border-right: solid #e8e8e8 1px;
                }
            }

        }

    }
</style>
