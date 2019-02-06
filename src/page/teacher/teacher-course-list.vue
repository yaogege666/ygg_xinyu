<template>
    <div class="teacher-course-list">
        <y-table :option="option">
            <el-table-column prop="name" label="课程名称"/>
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
        name: "teacher-course-list",
        data() {
            const option = new TableOption({
                queryPage: 'course/queryPage',
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
                this.$lv.push('/teacher/teacher-course-detail', row)
            },
        }
    }
</script>

<style lang="scss">

</style>