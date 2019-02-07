<template>
    <div class="teacher-cls-detail">
        <div class="detail-title-wrapper">
            <el-card>
                <div class="detail-title">
                    <span class="title">{{`${cls.grade}级${cls.cls}班`}}</span>
                    <el-button type="text" @click="$lv.back()"><i class="el-icon-arrow-left"/>返回</el-button>
                </div>
            </el-card>
        </div>
        <el-card>
            <div ref="studentReportDiv" class="report-div"></div>
        </el-card>
        <div class="table-wrapper">
            <div class="student-table">
                <y-table :option="studentOption" v-if="!!studentOption">
                    <el-table-column prop="name" label="学生姓名" search="input" sortable="custom"/>
                    <el-table-column prop="code" label="学号" search="input" sortable="custom"/>
                    <el-table-column prop="tel" label="电话号码" search="input" sortable="custom"/>
                </y-table>
            </div>
            <div class="score-table">
                <y-table :option="scoreOption" v-if="!!scoreOption">
                    <el-table-column prop="studentName" label="学生姓名" search="input" sortable="custom"/>
                    <el-table-column prop="studentClassName" label="学生班级" search="input" sortable="custom"/>
                    <el-table-column prop="courseName" label="课程名称" search="input" sortable="custom" width="130px"/>
                    <el-table-column prop="courseTeacherName" label="任课老师" search="input" sortable="custom"/>
                    <el-table-column prop="reason" label="考评性质" search="lov" lov="REASON" sortable="custom">
                        <template slot-scope="{row}">
                            <y-lov-text :value="row.type" type="REASON"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="score" label="扣分" search="input" sortable="custom"/>
                    <el-table-column prop="checkTeacherName" label="考评人" search="input" sortable="custom"/>
                    <el-table-column prop="comment" label="考评备注" search="input" sortable="custom"/>
                    <el-table-column prop="checkTime" label="考评时间" search="input" sortable="custom" width="150px"/>
                </y-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "teacher-cls-detail",
        data() {
            const cls = this.$route.query
            const studentOption = new TableOption({
                title: '学生列表',
                queryPage: 'user/queryAll',
                filters: [
                    {field: 'classId', value: cls.id}
                ],
                param: {
                    attr1: 'allScore'
                },
                afterLoad: () => {
                    this.studentChart = this.$echarts.init(this.$refs.studentReportDiv)
                    const xAxisData = studentOption.list.map(item => item.name)
                    const decreaseData = studentOption.list.map(item => item.decreaseScore)
                    const increaseData = studentOption.list.map(item => item.increaseScore)
                    const option = {
                        title: {
                            text: '学生考评得分/扣分记录表'
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
                    };
                    this.studentChart.setOption(option)
                },
            })
            const scoreOption = new TableOption({
                title: '班级考评记录列表',
                queryPage: 'score/queryPage',
                filters: [
                    {field: 'studentClassName', value: `${cls.grade}级${cls.cls}班`}
                ]
            })
            return {
                cls,
                studentOption,
                scoreOption,
            }
        },
    }
</script>

<style lang="scss">
    .teacher-cls-detail {
        width: 100%;
        box-sizing: border-box;
        .table-wrapper {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            .student-table {
                width: 550px;
                margin-right: 12px;
            }
            .score-table {
                flex: 1;
            }
        }
    }
</style>