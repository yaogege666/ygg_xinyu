<template>
    <div class="tea-score-list">
        <span class="tea-check-header"> &nbsp; &nbsp;学生请假信息审批</span> <br/>
        <el-table
                :data="tableData"
                border
                style="width: 95%;margin: 20px"
                :row-class-name="tableRowClassName" >
            <el-table-column
                    fixed="left"
                    prop="name"
                    label="学生姓名"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="class"
                    label="学生班级"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="记录时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="isWarn"
                    label="是否警告"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="考评性质"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="nature"
                    label="学生性质"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="suggestions"
                    label="老师建议"
                    width="350"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "tea-score-list",
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
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn:'false',
                    type: ['上课打游戏','不认真听讲'],
                    nature: '问题学生',
                    suggestions: '好好上课，不然退学'
                } ,{
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn:'false',
                    type: ['上课打游戏','不认真听讲'],
                    nature: '问题学生',
                    suggestions: '好好上课，不然退学'
                } ,{
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn:'false',
                    type: ['上课打游戏','不认真听讲'],
                    nature: '问题学生',
                    suggestions: '好好上课，不然退学'
                } ,{
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn:'false',
                    type: ['上课打游戏','不认真听讲'],
                    nature: '问题学生',
                    suggestions: '好好上课，不然退学'
                } ,{
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn:'false',
                    type: ['上课打游戏','不认真听讲'],
                    nature: '问题学生',
                    suggestions: '好好上课，不然退学'
                } ,{
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn:'false',
                    type: ['上课打游戏','不认真听讲'],
                    nature: '问题学生',
                    suggestions: '好好上课，不然退学'
                } ,{
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn:'false',
                    type: ['上课打游戏','不认真听讲'],
                    nature: '问题学生',
                    suggestions: '好好上课，不然退学'
                } ,]
            }
        }
    }
</script>

<style lang="scss">
        .tea-score-list {
            width: 1050px;
            height: 500px;
            margin: 20px 40px;
            background-color: #fdffd8;
            .tea-score-header {
                color: red;
                font-size: 25px;
            }
        }

</style>
