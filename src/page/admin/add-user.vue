<template>
     <div class="add-user">
          <span class="user-header">添加用户</span>
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <el-form-item label="学号/工号" prop="code" required style="width: 300px">
                 <el-input v-model="ruleForm.code"></el-input>
             </el-form-item>
             <el-form-item label="用户角色" required>
                 <el-radio-group v-model="ruleForm.role">
                     <el-radio label="学生"></el-radio>
                     <el-radio label="老师"></el-radio>
                     <el-radio label="巡视人员"></el-radio>
                 </el-radio-group>
             </el-form-item>
             <el-form-item label="用户名" prop="username" required style="width: 300px">
                 <el-input v-model="ruleForm.username"></el-input>
             </el-form-item>
             <el-form-item label="密码"   aria-placeholder="请输入密码"  prop="password" required style="width: 300px">
                 <el-input v-model="ruleForm.password"></el-input>
             </el-form-item>
             <el-form-item label="手机号" prop="tel" required style="width: 300px">
                 <el-input v-model="ruleForm.tel"></el-input>
             </el-form-item>
             <el-form-item label="邮箱地址" prop="email" required style="width: 300px">
                 <el-input v-model="ruleForm.email"></el-input>
             </el-form-item>
             <el-form-item label="class" prop="class">
                 <el-radio-group v-model="ruleForm.class">
                     <el-radio label="-----"></el-radio>
                     <el-radio label="软件151"></el-radio>
                     <el-radio label="软件152"></el-radio>
                 </el-radio-group>
             </el-form-item>
             <el-form-item>
                 <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                 <el-button @click="resetForm('ruleForm')">重置</el-button>
                 <el-button class="button" @click="back" type="primary">返回用户列表</el-button>
             </el-form-item>
         </el-form>
     </div>
</template>

<script>
    export default {
        name: "add-user",
        data() {
            return {
                ruleForm: {
                    code: '',
                    role: '',
                    username: '',
                    password:'  ',
                    tel:'',
                    email:' ',
                    class:' '
                },
                rules: {
                    code: [
                        { required: true, message: '请输入学号/工号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 7 个字符', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入学号/工号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 7 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入学号/工号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 7 个字符', trigger: 'blur' }
                    ],
                    role: [
                        { required: true, message: '请选择用户角色', trigger: 'change' }
                    ],
                }
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
                this.$lv.push('/admin/admin')
            }
        }

    }
</script>

<style lang="scss">
    .add-user {
        width: 100%;
        height: 100%;

    }
</style>
