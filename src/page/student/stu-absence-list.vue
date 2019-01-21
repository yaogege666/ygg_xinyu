<template>
    <div class="stu-absence-list">
        <div class="stu-absence-list-header">历史请假记录表</div>
        <br/>
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
                    width="170">
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
                    <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                        <el-form :model="ruleForm" ref="ruleForm" label-width="130px" class="demo-ruleForm">
                            <el-form-item label="学号" prop="code" style="width: 330px">
                                <el-input v-model="ruleForm.code"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名" prop="name" style="width: 330px">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="班级" prop="class_name" >
                                <el-select v-model="ruleForm.class_name" placeholder="请选择班级">
                                    <el-option label="软件151" value="shanghai"></el-option>
                                    <el-option label="软件152" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="请假审批老师" prop="username">
                                <el-select v-model="ruleForm.username" placeholder="请选择老师">
                                    <el-option label="高数老师" value="shanghai"></el-option>
                                    <el-option label="大学英语老师" value="beijing"></el-option>
                                    <el-option label="老师" value="beijing"></el-option>
                                    <el-option label="数学老师" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="请假时间" required>
                                <el-col :span="6">
                                    <el-form-item prop="date1" style="width: 200px">
                                        <el-date-picker type="date" placeholder="开始时间" v-model="ruleForm.date1" ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6"   required>
                                    <el-form-item prop="date2" style="width: 250px">
                                        <el-date-picker type="date" placeholder="结束时间" v-model="ruleForm.date2" ></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="请假原因" prop="absence_reason">
                                <el-radio-group v-model="ruleForm.absence_reason">
                                    <el-radio label="身体原因"></el-radio>
                                    <el-radio label="参加竞赛活动比赛等"></el-radio>
                                    <el-radio label="家中事务"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">提交请假申请</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                                <el-button class="button" @click="back" type="primary">返回请假列表</el-button>
                            </el-form-item>
                        </el-form>
                        <div slot="footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>
                </template>
            </el-table-column>
        </el-table>
        <el-button class="go-button" @click="go" type="primary">新建请假记录</el-button>
    </div>
</template>

<script>

    export default {
        name: "stu_absence_list",
        data() {
            return {
                currentPath: null,
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
                    check_time: '2019-1-20'

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
                    check_time: '2019-1-20'
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
                    check_time: '2019-1-20'
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
                    check_time: '2019-1-20'
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
                    check_time: '2019-1-20'
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
                    check_time: '2019-1-20'
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
                    check_time: '2019-1-20'
                }],
                dialogFormVisible: false,
                ruleForm: {
                    code:'',
                    username: '',
                    class: '',
                    absence_start_time:'',
                    absence_end_time:'',
                    class_name: '',
                    absence_reason: '',
                    check_tea :'',
                    check_status :'',
                    check_result :'',
                    check_time: ''
                }

            }
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            go() {
                this.$lv.push('/student/stu-absence')
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

        },
    }
</script>

<style lang="scss">
    .stu-absence-list {
        width: 1240px;
        height: 430px;
        margin-left: 10px;
        .stu-absence-list-header {
            color: #0a0a26;
            font-size: 25px;
            margin-bottom: 20px;
            margin-right: 150px;
            text-align: center;
        }
        .go-button {
            margin-right: 70px;
            margin-top: 30px;
          float: right;
        }
        .button {
            margin-left: 20px;
        }
    }

</style>
