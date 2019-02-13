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
        data() {
            const option = new TableOption({
                queryPage: 'interUserCourse/queryTeacherScore',
                filters: [
                    {field: 'userId', value: user.userId}
                ],
                afterLoad: () => {
                    this.chart = this.$echarts.init(this.$refs.reportDiv)
                    const courseName=this.option.list.map(item => item.courseName)
                    const decreaseData = this.option.list.map(item => item.decreaseScore)
                    const increaseData = this.option.list.map(item => item.increaseScore)
                    const  option = {
                        legend: {},
                        tooltip: {},
                        dataset: {
                            source: [
                                ['rule', 'increase', 'decrease'],
                                [courseName, increaseData, decreaseData],
                            ]
                        },
                        series: [{
                            type: 'pie',
                            radius: 60,
                            center: ['25%', '30%'],
                            encode: {
                                itemName: 'rule',
                                value: 'increase'
                            }
                        }, {
                            type: 'pie',
                            radius: 60,
                            center: ['75%', '30%'],
                            encode: {
                                itemName: 'rule',
                                value: 'decrease'
                            }
                        }]
                    }
                    this.chart.setOption(option)

                }
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
