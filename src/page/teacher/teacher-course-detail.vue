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
                    <el-table-column prop="studentName" label="学生姓名" search="input" sortable="custom"/>
                    <el-table-column prop="studentClassName" label="学生班级" search="input" sortable="custom"/>
                    <el-table-column prop="courseName" label="课程名称" search="input" sortable="custom"/>
                    <el-table-column prop="courseTeacherName" label="任课老师" search="input" sortable="custom"/>
                    <el-table-column prop="reason" label="考评性质" search="lov" lov="REASON" sortable="custom">
                        <template slot-scope="{row}">
                            <y-lov-text :value="row.type" type="REASON"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="score" label="扣分" search="input" sortable="custom"/>
                    <el-table-column prop="checkTeacherName" label="考评人" search="input" sortable="custom"/>
                    <el-table-column prop="comment" label="考评备注" search="input" sortable="custom"/>
                    <el-table-column prop="checkTime" label="考评时间" search="input" sortable="custom"/>
                </y-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "teacher-course-detail",
        data() {
            const course = this.$route.query
            const studentOption = new TableOption({
                title: '学生列表',
                queryPage: 'interUserCourse/queryPage',
                filters: [
                    {field: 'courseId', value: course.id}
                ]
            })
            const scoreOption = new TableOption({
                title: '班级考评记录列表',
                queryPage: 'score/queryPage',
                filters: [
                    {field: 'courseId', value: course.id}
                ]
            })
            return {
                course,
                studentOption,
                scoreOption,
            }
        },
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