<template>
        <div id="myChart"></div>
      <!--  <div id="myChart_all"></div>-->
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
            /*this.drawRec();*/
        },
        methods: {
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                myChart.setOption({
                    title: { text: '本学期加分和减分'},
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name:'加分',
                        data: [20, 40, 50, 70, 90, 30, 80],
                        type: 'line'
                    },{
                        name:'减分',
                        data: [50, 30, 60, 90, 50, 80, 10],
                        type: 'line'
                    },{
                        name:'总成绩',
                        data: [70, 10, 90, 80, 90, 30, 40],
                        type: 'line'
                    }]
                });
            },
/**/
        }

    }
</script>

<style lang="scss">
    #myChart{
        width: 60%;
        height: 400px;
        margin-top: 15px;
        background-color: #d7dfe2;
    }
/*    #myChart_all {
        width: 40%;
        height: 400px;
        margin-top: 15px;
        background-color: wheat;
    }*/
</style>
