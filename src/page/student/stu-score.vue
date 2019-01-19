<template>
    <div class="stu-score">
        <div class="stu-score-header"> &nbsp; &nbsp;学生记录考评一览表</div>
        <br/>
        <el-table
                :data="tableData"
                border
                style="width: 95%;"
                :row-class-name="tableRowClassName">
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
                    label="考评时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="isWarn"
                    label="是否警告"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="问题性质"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="nature"
                    label="学生性质"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="add"
                    label="学生加分"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="decrease"
                    label="学生减分"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="decrease"
                    label="学生减分"
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
        name: "stu-score",
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
                    isWarn: 'false',
                    type: ['上课打游戏', '不认真听讲'],
                    nature: '问题学生',
                    add: '80',
                    decrease: '30',
                    suggestions: '好好上课，不然退学'
                }, {
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn: 'false',
                    type: ['上课打游戏', '不认真听讲'],
                    nature: '问题学生',
                    add: '80',
                    decrease: '30',
                    suggestions: '好好上课，不然退学'
                }, {
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn: 'false',
                    type: ['上课打游戏', '不认真听讲'],
                    nature: '问题学生',
                    add: '80',
                    decrease: '30',
                    suggestions: '好好上课，不然退学'
                }, {
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn: 'false',
                    type: ['上课打游戏', '不认真听讲'],
                    nature: '问题学生',
                    add: '80',
                    decrease: '30',
                    suggestions: '好好上课，不然退学'
                }, {
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn: 'false',
                    type: ['上课打游戏', '不认真听讲'],
                    nature: '问题学生',
                    add: '80',
                    decrease: '30',
                    suggestions: '好好上课，不然退学'
                }, {
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn: 'false',
                    type: ['上课打游戏', '不认真听讲'],
                    nature: '问题学生',
                    add: '80',
                    decrease: '30',
                    suggestions: '好好上课，不然退学'
                }, {
                    name: '王小虎',
                    class: '软件153',
                    date: '2016-05-03',
                    isWarn: 'false',
                    type: ['上课打游戏', '不认真听讲'],
                    nature: '问题学生',
                    add: '80',
                    decrease: '30',
                    suggestions: '好好上课，不然退学'
                },]
            }
        }
    }
</script>

<style lang="scss">
    .stu-score {
        width: 1260px;
        height: 600px;
        margin-left: 5px;
        background-color: #eef5f9;
        .stu-score-header {
            color: #0a0a26;
            font-size: 25px;
            margin-bottom: 30px;
            margin-right: 120px;
            text-align: center;
        }
    }

</style>
