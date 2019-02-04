<template>
    <div class="teacher-course-list">
        <y-table :option="option">
            <el-table-column prop="name" label="课程名称"/>
        </y-table>
        <y-table :option="studentOption">
            <el-table-column prop="userName" label="学生名称"/>
            <el-table-column prop="className" label="学生班级"/>
            <el-table-column prop="userTeacherName" label="学生辅导员"/>
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
                ]
            })
            const studentOption = new TableOption({
                queryPage: 'interUserCourse/queryPage',
                parentOption: option,
                parentMap: {
                    courseId: 'id'
                }
            })
            return {
                option,
                studentOption,
            }
        },
    }
</script>

<style lang="scss">

</style>