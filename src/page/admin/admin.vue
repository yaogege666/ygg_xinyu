<template>
    <div class="admin">
        <div class="admin-class">课程管理</div>
        <div class="admin-user">
            <span class="role">用户管理</span>
            <el-table
                    :data="tableData3"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="code"
                        label="学号/工号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="role"
                        label="用户角色"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="用户名">
                </el-table-column>
                <el-table-column
                        prop="password"
                        label="密码">
                </el-table-column>
                <el-table-column
                        prop="tel"
                        label="手机号">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱">
                </el-table-column>
                <el-table-column
                        prop="class"
                        label="班级">
                </el-table-column>
            </el-table>
            <el-button class="go-button" @click="go" type="primary">添加用户</el-button>

        </div>
    </div>
</template>

<script>
    import AddUser from "./add-user";
    export default {
        name: "admin",
        components: {AddUser},
        data() {
            return {
                tableData3: [{
                    code: '2015001',
                    role: 'teacher',
                    username: '王老师',
                    password:'*******',
                    tel:'17864298876',
                    email:'32162987998@qq.com',

                },{
                    code: '2015002',
                    role: 'teacher',
                    username: '赵老师',
                    password:'*******',
                    tel:'17864298876',
                    email:'32162987998@qq.com',

                },{
                    code: '2015001',
                    role: 'student',
                    username: '王小虎',
                    password:'*******',
                    tel:'17864298876',
                    email:'32162987998@qq.com',
                    class:'软件151'

                },{
                    code: '2015001',
                    role: 'student',
                    username: '王小虎',
                    password:'*******',
                    tel:'17864298876',
                    email:'32162987998@qq.com',
                    class:'软件151'

                },{
                    code: '2015001',
                    role: 'student',
                    username: '王小虎',
                    password:'*******',
                    tel:'17864298876',
                    email:'32162987998@qq.com',
                    class:'软件151'

                },{
                    code: '2015001',
                    role: 'teacher',
                    username: '许老师',
                    password:'*******',
                    tel:'17864298876',
                    email:'32162987998@qq.com',

                }, ]
            }

        },
        methods: {
            go() {
                this.$lv.push('/admin/add-user')
            }
        }
    }
</script>

<style lang="scss">
    .admin-user {


        .go-button {
            margin-right: 70px;
            margin-top: 30px;
            float: right;
        }
    }


</style>
