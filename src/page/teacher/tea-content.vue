<template>
    <div class="tea-content">
        <div class="tea-content-list">
            <div class="tea-content">
                <div class="tea-content-item">
                    <div class="tea-content-item">姓名：韦老师</div>
                    <div class="tea-content-item">授课班级：软件151</div>
                </div>
            </div>
            <div class="tea-content">
                <div class="tea-content-item">课程</div>
            </div>
            <div class="tea-content">
                <div class="tea-content-item">电话号码</div>
                <div class="tea-content-item">邮箱地址</div>
            </div>
            <div class="tea-content">
                <div class="tea-content-item">
                    <div class="tea-content-item">综合信誉考评成绩</div>
                    <div class="tea-content-item">分数</div>
                </div>
            </div>
        </div>
        <tea_echart/>

        <tea-score/>
        <tea-score-list/>
    </div>
</template>

<script>
    import TeaScore from "./tea-score";
    import TeaCheck from "./tea-check";
    import TeaScoreList from "./tea-score-list";
    import Tea_echart from "./tea_echart";

    export default {
        name: "tea-content",
        components: {Tea_echart, TeaScoreList, TeaCheck, TeaScore},
        created() {
            console.log(this.$route.query)
        },
    }
</script>

<style lang="scss">
    .tea-content {
        width: 100%;
        background-color: #f5f5ff;
        color: #0a0a26;
        box-sizing: border-box;
        .tea-content-list {
            width: 100%;
            height: 156px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: white;
            box-shadow: 3px 3px 5px #ddd;
            margin-bottom: 12px;

            .tea-content {
                height: 100px;
                flex: 1;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                .tea-content-item {
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
