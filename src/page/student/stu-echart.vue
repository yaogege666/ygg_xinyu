<template>
        <div id="myChart"></div>
</template>

<script>
    export default {
        name: "stu-echart",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
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
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
                            data: [200, 170, 240, 244, 200, 220, 210]
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
                            data: [320, 302, 341, 374, 390, 450, 420]
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
                            data: [-120, -132, -101, -134, -190, -230, -210]
                        }
                    ]
                });
            }

        }
    }
</script>

<style lang="scss">
    #myChart{
        width: 60%;
        height: 400px;
        margin-top: 35px;
        margin-left: 230px;
        background-color: #badbe2;
    }
</style>
