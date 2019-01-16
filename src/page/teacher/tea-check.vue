<template>
    <div class="tea-check">
        <span class="tea-check-header"> &nbsp; &nbsp;学生请假信息审批</span> <br/>
            <el-table
                    :data="tableData"
                    border
                    style="width: 95%;margin: 20px"
                    :row-class-name="tableRowClassName" >
                <el-table-column
                        prop="date"
                        label="请假日期"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="class"
                        label="班级"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="course"
                        label="请假课程"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="reason"
                        label="请假原因"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="tel"
                        label="联系电话"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="老师审批"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">同意</el-button>
                        <el-button type="text" size="small">拒绝</el-button>
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
                    date: '2016-05-03',
                    name: '王小虎',
                    class: '软件153',
                    course: '数学',
                    reason: '肚子疼',
                    tel: 17843214321
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    class: '软件153',
                    course: '数学',
                    reason: '肚子疼',
                    tel: 17843214321
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    class: '软件153',
                    course: '数学',
                    reason: '肚子疼',
                    tel: 17843214321
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    class: '软件153',
                    course: '数学',
                    reason: '肚子疼',
                    tel: 17843214321
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    class: '软件153',
                    course: '数学',
                    reason: '肚子疼',
                    tel: 17843214321
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    class: '软件153',
                    course: '数学',
                    reason: '肚子疼',
                    tel: 17843214321
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    class: '软件153',
                    course: '数学',
                    reason: '肚子疼',
                    tel: 17843214321
                },  ]
            }
        }
    }
</script>

<style lang="scss">
    .tea-check {
        width: 1050px;
        height: 530px;
        margin: 20px 40px;
        background-color: #f2f2f2;
        .tea-check-header {
            color: red;
            font-size: 25px;
        }
    }
</style>
