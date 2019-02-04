<template>
    <div class="teacher-cls-list">
        <y-table :option="option">
            <el-table-column prop="grade" label="年级" sortable="custom"/>
            <el-table-column prop="cls" label="班级" sortable="custom"/>
            <el-table-column prop="teacherName" label="班级辅导员" sortable="custom"/>
        </y-table>

        <y-table :option="studentOption">
            <el-table-column prop="name" label="学生姓名" search="input" sortable="custom"/>
            <el-table-column prop="code" label="学号" search="input" sortable="custom"/>
            <el-table-column prop="tel" label="电话号码" search="input" sortable="custom"/>
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
                ]
            })
            const studentOption = new TableOption({
                queryPage: 'user/queryPage',
                parentOption: option,
                parentMap: {
                    classId: 'id'
                }
            })
            return {
                option,
                studentOption
            }
        },
    }
</script>

<style lang="scss">

</style>