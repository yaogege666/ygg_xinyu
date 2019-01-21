<template>

    <div class="stu-echart">
        <div class="stu-echart-header">本学期信誉评价得分汇总表</div>
        <div id="myChart"></div>
    </div>
</template>

<script>
    export default {
        name: "stu-echart",
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['总分', '得分', '扣分']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            axisTick: {show: false},
                            data: ['第一个月', '第二个月', '第三个月', '第四个月', '第五个月']
                        }
                    ],
                    series: [
                        {
                            name: '总分',
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [100-20, 80-12, 85-10,95-35, 98-30]
                        },
                        {
                            name: '得分',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            data: [100, 80, 85, 95, 98]
                        },
                        {
                            name: '扣分',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'left'
                                }
                            },
                            data: [-20, -12, -10, -35, -30]
                        }
                    ]
                });
            }

        }
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
