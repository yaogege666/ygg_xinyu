<template>
    <div class="tea-content">
        <div class="tea-content-list">
            <div class="tea-content">
                <div class="tea-content-item">
                    <div class="tea-content-item">欢迎！{{teacher.name}}</div>
                    <div class="tea-content-item">工号：{{teacher.code}}</div>
                </div>
            </div>
        </div>
        <el-card>
            <div ref="clsReportDiv" class="report-div"></div>
        </el-card>
        <tea-echarts/>
    </div>
</template>

<script>
    import TeaEcharts from "./tea-echarts";
    export default {
        name: "tea-content",
        components: {TeaEcharts},
        data() {
            return {
                teacher: user
            }
        },
        async created() {
            const {ret} = await this.$http.post('cls/queryClass', {teacherId: user.id})
            const result1 = ret.map((item) => [item.fullName, item.increaseScore == null ? 0 : item.increaseScore - 0, item.decreaseScore == null ? 0 : item.decreaseScore - 0])
            result1.unshift(['score', 'increase', 'decrease'])
            var option = {
                title : {
                    text: '所管理班级得分饼图如下：',
                },
                backgroundColor: '#FFFFDD',
                itemStyle: {
                    shadowBlur: 150,
                },
                visualMap: {
                    // 不显示 visualMap 组件，只用于明暗度的映射
                    show: false,
                    inRange: {
                        // 明暗度的范围是 0 到 1
                        colorLightness: [0.5, 0.8]
                    }
                },
                tooltip: {},
                dataset: {
                    source: result1
                },
                series: [{
                    type: 'pie',
                    radius: 70,
                    center: ['25%', '50%'],
                }, {
                    type: 'pie',
                    radius: 70,
                    center: ['75%', '50%'],
                    encode: {
                        itemName: 'score',
                        value: 'decrease'
                    },

                }]
            };
            this.chart = this.$echarts.init(this.$refs.clsReportDiv)
            this.chart.setOption(option)

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

                &:not(:last-child) {
                    border-right: solid #e8e8e8 1px;
                }
            }

        }

    }
</style>
