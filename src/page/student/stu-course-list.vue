<template>
    <div class="stu-course-list">
        <y-table :option="option">
            <el-table-column prop="courseName" label="课程名称"/>
            <el-table-column prop="courseTeacherName" label="任课老师"/>
        </y-table>
    </div>
</template>

<script>
    export default {
        name: "stu-course-list",
        data() {
            console.log(this.$store)
            const option = new TableOption({
                queryPage: 'interUserCourse/queryPage',
                filters: [
                    {field: 'userId', value: this.$store.getters['user/userInfo'].id}
                ]
            })
            return {
                option,
            }
        },
    }
</script>

<style lang="scss">

</style>