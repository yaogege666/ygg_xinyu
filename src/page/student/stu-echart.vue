<template>

    <div class="stu-echart">
        <div class="stu-echart-header">本学期信誉评价得分汇总表</div>
        <el-card>
            <div ref="reportDiv" class="report-div"></div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "stu-echart",
        async created() {
            const {ret} = await this.$http.post('interUserCourse/queryCourseScore', {userId: user.id})
            const result1 = ret.map((item) => [item.courseName, item.increaseScore == null ? 0 : item.increaseScore - 0, item.decreaseScore == null ? 0 : item.decreaseScore - 0])
            result1.unshift(['score', 'increase', 'decrease'])
            var option = {
                legend: {},
                tooltip: {},
                dataset: {
                    source: result1
                },
                series: [{
                    type: 'pie',
                    radius: 60,
                    center: ['25%', '50%'],
                    encode: {
                        itemName: 'score',
                        value: 'increase'
                    }
                }, {
                    type: 'pie',
                    radius: 60,
                    center: ['75%', '50%'],
                    encode: {
                        itemName: 'score',
                        value: 'decrease'
                    }
                }]
            };
            this.chart = this.$echarts.init(this.$refs.reportDiv)
            this.chart.setOption(option)
        },
        data() {
            const option = new TableOption({
                queryPage: 'interUserCourse/queryCourseScore',
                filters: [
                    {field: 'userId', value: user.userId}
                ],
            })
            return {
                option,
            }
        },
    }
</script>

<style lang="scss">
    .stu-echart {
        width: 100%;
        height: 430px;

        margin-top: 60px;
        background-color: #eef5f9;
        #myChart {
            width: 60%;
            height: 430px;
            background-color: #eef5f9;
            margin-left: 190px;
        }
        .stu-echart-header {
            margin-left: 450px;
            margin-bottom: 40px;
            font-size: 23px;
            color: black;

        }
    }
</style>
