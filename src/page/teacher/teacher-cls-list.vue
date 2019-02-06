<template>
    <div class="teacher-cls-list">
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
                ]
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