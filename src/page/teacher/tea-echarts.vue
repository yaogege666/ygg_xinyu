<template>
    <el-card>
        <div ref="courseReportDiv" class="report-div"></div>
    </el-card>
</template>

<script>
    export default {
        name: "tea-echarts",
        async created() {
            const {ret} = await this.$http.post('course/queryCourse', {teacherId: user.id})
            console.log(ret)
            const result1 = ret.map((item) => [item.name, item.increaseScore == null ? 0 : item.increaseScore - 0, item.decreaseScore == null ? 0 : item.decreaseScore - 0])
            result1.unshift(['score', 'increase', 'decrease'])
            console.log(result1)
            var option = {
                title : {
                    text: '所教授课程得分饼图如下：',
                },
                legend: {},
                backgroundColor: '#FFFFDD',
                itemStyle: {
                    shadowBlur: 150,
                },
                tooltip: {},
                dataset: {
                    source: result1
                },
                series: [{
                    type: 'pie',
                    radius: 80,
                    center: ['25%', '50%'],
                    // No encode specified, by default, it is '2012'.
                }, {
                    type: 'pie',
                    radius: 80,
                    center: ['75%', '50%'],

                    encode: {
                        itemName: 'score',
                        value: 'decrease'
                    }
                }]
            };
            this.chart = this.$echarts.init(this.$refs.courseReportDiv)
            this.chart.setOption(option)

        },
    }
</script>

<style lang="scss">

</style>
