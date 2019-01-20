<template>
    <div class="tea-echart">
        <div class="tea-echart-header">本学期课程受欢迎曲线图</div>
        <div id="myChart"></div>
    </div>
</template>

<script>
    export default {
        name: "tea_echart",
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]


                })

            }
        }
    }
</script>

<style lang="scss">
    .tea-echart {
        width: 100%;
        height: 430px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 35px;
        background-color: #f5f5ff;
        #myChart {
            width: 60%;
            height: 430px;
            background-color: #f5f5ff;
            margin-left: 80px;
        }
        .tea-echart-header {
            font-size: 23px;
            color: black;

        }
    }

</style>
