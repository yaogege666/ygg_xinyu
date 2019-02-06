<template>
    <div class="teacher-cls-detail">
        <div>
            <el-button type="text" @click="$lv.back()"><i class="el-icon-arrow-left"/>返回</el-button>
        </div>
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
        name: "teacher-cls-detail",
        data() {
            return {
                studentOption: null,
                scoreOption: null,
            }
        },
        created() {
            const cls = this.$route.query
            this.studentOption = new TableOption({
                title: '学生列表',
                queryPage: 'user/queryPage',
                filters: [
                    {field: 'classId', value: cls.id}
                ]
            })

            this.scoreOption = new TableOption({
                title: '班级考评记录列表',
                queryPage: 'score/queryPage',
                filters: [
                    {field: 'studentClassName', value: `${cls.grade}级${cls.cls}班`}
                ]
            })
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