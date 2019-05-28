<template>
    <div class="stu-score">
        <y-table :option="option">
            <el-table-column prop="courseName" label="课程名称" search="input" sortable="custom"/>
            <el-table-column prop="courseTeacherName" label="任课老师" search="input" sortable="custom"/>
            <el-table-column prop="type" label="考评性质" search="lov" lov="REASON" sortable="custom">
                <template slot-scope="{row}">
                    <y-lov-text :value="row.type" type="REASON"/>
                </template>
            </el-table-column>
            <el-table-column prop="score" label="扣分" search="input" sortable="custom"/>
            <el-table-column prop="comment" label="考评备注" search="input" sortable="custom"/>
            <el-table-column prop="checkTeacherName" label="考评人" search="input" sortable="custom"/>
            <el-table-column prop="checkTime" label="考评时间" search="input" sortable="custom"/>
        </y-table>
    </div>
</template>

<script>
    export default {
        name: "stu-score",
        methods: {},
        data() {
            const option = new TableOption({
                queryPage: 'score/queryPage',
                filters: [
                    {field: 'studentId', value: user.id}
                ]
            })
            return {
                option,
            }
        }
    }
</script>

<style lang="scss">
    .stu-score {

    }

</style>
