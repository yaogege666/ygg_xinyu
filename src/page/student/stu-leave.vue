<template>
    <div class="stu-leave">
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
    </div>

</template>

<script>
    import StuAbsenceList from "./stu-leave-list";
    export default {
        name: "stu_absence",
        components: {StuAbsenceList},
        data() {
            return {
                ruleForm: {
                    code:'',
                    username: '',
                    class: '',
                    leave_start_time:'',
                    leave_end_time:'',
                    class_name: '',
                    absence_reason: '',
                    check_tea :'',
                    check_status :'',
                    check_result :'',
                    check_time: ''
                },

            };
        },
        methods: {
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
            back() {
                this.$lv.push('/student/stu-leave-list')
            }
        }
    }
</script>

<style lang="scss">
    .stu-leave {
        width: 100%;
        height: 600px;
        margin-top: 50px;
        background-color: #eef5f9;
        .button {
            margin-left: 20px;
        }
    }
</style>
