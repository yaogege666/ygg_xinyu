<template>
    <div class="teacher-course-detail">
        <div class="detail-title-wrapper">
            <el-card>
                <div class="detail-title">
                    <span class="title">{{course.name}}</span>
                    <el-button type="text" @click="$lv.back()"><i class="el-icon-arrow-left"/>返回</el-button>
                </div>
            </el-card>
        </div>
        <el-card>
            <div ref="studentReportDiv" class="report-div"></div>
        </el-card>
        <div class="table-wrapper">
            <div class="student-table">
                <y-table :option="studentOption">
                    <el-table-column prop="userName" label="学生名称"/>
                    <el-table-column prop="className" label="学生班级"/>
                    <el-table-column prop="userTeacherName" label="学生辅导员"/>
                </y-table>
            </div>
            <div class="score-table">
                <y-table :option="scoreOption" v-if="!!scoreOption">
                    <el-button @click="newData" slot="button">添加</el-button>
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

        <el-dialog :visible.sync="dialogVisible" width="500px" :title="isInsert?'新建':'编辑'">

            <el-form label-width="80px" label-position="left" :model="formData" ref="form">
                <el-form-item label="学生" prop="studentName">
                    <y-object-input :option="studentPickOption" :map="{studentId:'userId',studentName:'userName'}" showKey="studentName" :row="formData"/>
                </el-form-item>
                <el-form-item label="考评性质" prop="type">
                    <y-lov type="REASON" v-model="formData.type"/>
                </el-form-item>
                <el-form-item label="考评备注" prop="comment">
                    <el-input v-model="formData.comment"/>
                </el-form-item>
                <el-form-item label="扣分/加分" prop="score">
                    <el-radio-group v-model="formData.score">
                        <el-radio label="5"/>
                        <el-radio label="2"/>
                        <el-radio label="1"/>
                        <el-radio label="-1"/>
                        <el-radio label="-2"/>
                        <el-radio label="-5"/>
                    </el-radio-group>
                    <el-input v-model="formData.score"/>
                </el-form-item>
                <el-form-item label="考评时间" prop="checkTime">
                    <y-date v-model="formData.checkTime" datetime/>
                </el-form-item>
            </el-form>
            <el-button slot="footer" @click="save">保存</el-button>
            <el-button slot="footer" @click="cancel">取消</el-button>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "teacher-course-detail",
        data() {
            const course = this.$route.query
            const studentOption = new TableOption({
                title: '学生列表',
                queryPage: 'interUserCourse/queryAll',
                filters: [
                    {field: 'courseId', value: course.id}
                ],
                param: {
                    attr1: 'courseScore',
                    attr2: course.id
                },
                afterLoad: () => {
                    this.studentChart = this.$echarts.init(this.$refs.studentReportDiv)
                    const xAxisData = this.studentOption.list.map(item => item.userName)
                    const decreaseData = this.studentOption.list.map(item => item.decreaseScore)
                    const increaseData = this.studentOption.list.map(item => item.increaseScore)

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
                    };
                    this.studentChart.setOption(option)
                }
            })
            const scoreOption = new TableOption({
                title: '课程内学生考评记录列表',
                queryPage: 'score/queryPage',
                filters: [
                    {field: 'courseId', value: course.id}
                ]
            })

            const studentPickOption = new TableOption({
                queryPage: 'interUserCourse/queryPage',
                render() {
                    return (
                        <div>
                            <el-table-column prop="userName" label="学生名称"/>
                            <el-table-column prop="className" label="学生班级"/>
                            <el-table-column prop="userTeacherName" label="学生辅导员"/>
                        </div>
                    )
                },
                filters: [
                    {field: 'courseId', value: course.id}
                ]
            })
            return {
                course,
                studentOption,
                scoreOption,
                studentPickOption,
                formData: {},
                dialogVisible: false,
                isInsert: true,
            }
        },
        methods: {
            newData() {
                this.isInsert = true
                this.formData = {
                    checkTime: this.$lv.$utils.dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss'),
                    checkTeacherId: user.id,
                    courseId: this.course.id
                }
                this.dialogVisible = true
                !!this.$refs.form && this.$refs.form.clearValidate()
            },
            async save() {
                await this.$http.post('score/insert', this.formData)
                await this.scoreOption.reload()
                this.dialogVisible = false
                this.clear()
            },
            cancel() {
                this.dialogVisible = false
                this.clear()
            },
            clear() {
                this.formData = {}
            },
        }
    }
</script>

<style lang="scss">
    .teacher-course-detail {
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