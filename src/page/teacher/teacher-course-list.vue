<template>
    <div class="teacher-course-list">
        <el-card>
            <div ref="reportDiv" class="report-div"></div>
        </el-card>
        <y-table :option="option">
            <el-table-column prop="name" label="课程名称"/>
            <el-table-column>
                <template slot-scope="{row}">
                    <el-button type="text" @click="openDetail(row)">查看详情</el-button>
                </template>
            </el-table-column>
        </y-table>
    </div>
</template>

<script>
    export default {
        name: "teacher-course-list",
        data() {
            const option = new TableOption({
                queryPage: 'course/queryPage',
                filters: [
                    {field: 'teacherId', value: user.id}
                ],
                param: {
                    attr1: 'courseScore'
                },
                afterLoad: () => {
                    this.chart = this.$echarts.init(this.$refs.reportDiv)
                    const xAxisData = this.option.list.map(item => item.name)
                    const decreaseData = this.option.list.map(item => item.decreaseScore)
                    const increaseData = this.option.list.map(item => item.increaseScore)
                    const option = {
                        title: {
                            text: '课程学生考评得分/扣分记录表'
                        },
                        legend: {
                            data: ['扣分', '得分']
                        },
                        xAxis: {
                            type: 'category',
                            axisTick: {show: false},
                            data: xAxisData
                        },
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                name: '扣分',
                                type: 'bar',
                                data: decreaseData,
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'inside'
                                    }
                                },
                            },
                            {
                                name: '得分',
                                type: 'bar',
                                data: increaseData,
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'inside'
                                    }
                                },
                            },
                        ]
                    }
                    this.chart.setOption(option)
                }
            })

            return {
                option,
            }
        },
        methods: {
            openDetail(row) {
                this.$lv.push('/teacher/teacher-course-detail', row)
            },
        }
    }
</script>

<style lang="scss">

</style>