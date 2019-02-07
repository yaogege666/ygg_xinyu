<template>
    <div class="teacher-cls-list">
        <el-card>
            <div ref="clsReportDiv" class="report-div"></div>
        </el-card>
        <y-table :option="option">
            <el-table-column prop="grade" label="年级" sortable="custom"/>
            <el-table-column prop="cls" label="班级" sortable="custom"/>
            <el-table-column prop="teacherName" label="班级辅导员" sortable="custom"/>
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
        name: "teacher-cls-list",
        data() {
            const option = new TableOption({
                queryPage: 'cls/queryPage',
                filters: [
                    {field: 'teacherId', value: user.id}
                ],
                afterLoad: () => {
                    this.clsChart = this.$echarts.init(this.$refs.clsReportDiv)
                    const xAxisData = this.option.list.map(item => item.fullName)
                    const decreaseData = this.option.list.map(item => item.decreaseScore)
                    const increaseData = this.option.list.map(item => item.increaseScore)
                    const option = {
                        title: {
                            text: '班级学生考评得分/扣分记录表'
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
                    this.clsChart.setOption(option)
                }
            })
            return {
                option,
            }
        },
        methods: {
            openDetail(row) {
                this.$lv.push('/teacher/teacher-cls-detail', row)
            },
        }
    }
</script>

<style lang="scss">

</style>