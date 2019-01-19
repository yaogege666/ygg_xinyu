<template>
<div class="tea-check">
    <div class="tea-check-header" > &nbsp; &nbsp;学生请假信息审批</div>
    <el-table
            :data="tableData"
            border
            style="width: 96%;"
            :row-class-name="tableRowClassName">
        <el-table-column
                prop="code"
                label="学号"
                width="120">
        </el-table-column>
        <el-table-column
                prop="username"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="class"
                label="班级"
                width="120">
        </el-table-column>
        <el-table-column
                prop="absence_start_time"
                label="请假开始时间"
                width="150">
        </el-table-column>
        <el-table-column
                prop="absence_end_time"
                label="请假结束时间"
                width="150">
        </el-table-column>
        <el-table-column
                prop="class_name"
                label="请假课程"
                width="120">
        </el-table-column>
        <el-table-column
                prop="absence_reason"
                label="请假原因"
                width="300">
        </el-table-column>
        <el-table-column
                prop="check_tea"
                label="请假审批老师"
                width="100">
        </el-table-column>
        <el-table-column
                prop="check_status"
                label="审批状态"
                width="100">
        </el-table-column>
        <el-table-column
                prop="check_result"
                label="审批结果"
                width="100">
        </el-table-column>
        <el-table-column
                prop="check_time"
                label="审批时间"
                width="100">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
    export default {
        name: "tea-check",
        methods: {
            handleClick(row) {
                console.log(row);
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        },
        data() {
            return {
                tableData: [{
                    code: '201501',
                    username: '王小虎',
                    class: '软件153',
                    absence_start_time: '2019-01-19',
                    absence_end_time: '2019-01-19',
                    class_name: '数学',
                    absence_reason: '身体原因',
                    check_tea: '数学老师',
                    check_status: '已审批',
                    check_result: '同意',
                    check_time: '2019-1-20',
                    tea_select: ''

                }, {
                    code: '201501',
                    username: '王小虎',
                    class: '软件153',
                    absence_start_time: '2019-01-19',
                    absence_end_time: '2019-01-19',
                    class_name: '数学',
                    absence_reason: '身体原因',
                    check_tea: '数学老师',
                    check_status: '已审批',
                    check_result: '同意',
                    check_time: '2019-1-20',
                    tea_select: ''

                }, {
                    code: '201501',
                    username: '王小虎',
                    class: '软件153',
                    absence_start_time: '2019-01-19',
                    absence_end_time: '2019-01-19',
                    class_name: '数学',
                    absence_reason: '身体原因',
                    check_tea: '数学老师',
                    check_status: '已审批',
                    check_result: '同意',
                    check_time: '2019-1-20',
                    tea_select: ''

                }, {
                    code: '201501',
                    username: '王小虎',
                    class: '软件153',
                    absence_start_time: '2019-01-19',
                    absence_end_time: '2019-01-19',
                    class_name: '数学',
                    absence_reason: '身体原因',
                    check_tea: '数学老师',
                    check_status: '已审批',
                    check_result: '同意',
                    check_time: '2019-1-20',
                    tea_select: ''

                }, {
                    code: '201501',
                    username: '王小虎',
                    class: '软件153',
                    absence_start_time: '2019-01-19',
                    absence_end_time: '2019-01-19',
                    class_name: '数学',
                    absence_reason: '身体原因',
                    check_tea: '数学老师',
                    check_status: '已审批',
                    check_result: '同意',
                    check_time: '2019-1-20',
                    tea_select: ''

                }, {
                    code: '201501',
                    username: '王小虎',
                    class: '软件153',
                    absence_start_time: '2019-01-19',
                    absence_end_time: '2019-01-19',
                    class_name: '数学',
                    absence_reason: '身体原因',
                    check_tea: '数学老师',
                    check_status: '已审批',
                    check_result: '同意',
                    check_time: '2019-1-20',
                    tea_select: ''

                }, {
                    code: '201501',
                    username: '王小虎',
                    class: '软件153',
                    absence_start_time: '2019-01-19',
                    absence_end_time: '2019-01-19',
                    class_name: '数学',
                    absence_reason: '身体原因',
                    check_tea: '数学老师',
                    check_status: '已审批',
                    check_result: '同意',
                    check_time: '2019-1-20',
                    tea_select: ''

                },]
            }
        }
    }
</script>

<style lang="scss">
    .tea-check {
        width: 1240px;
        margin:7px;
        .tea-check-header {
            color: #0a0a26;
            font-size: 25px;
            margin-bottom: 20px;
            margin-right: 150px;
            text-align: center;
        }
    }

</style>
