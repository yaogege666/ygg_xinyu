<template>
    <div class="user-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="updateData">编辑</el-button>
                <el-button @click="deleteData">删除</el-button>
            </div>
            <el-table-column prop="id" label="编号" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="username" label="用户名" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="password" label="密码" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="code" label="学号/工号" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="role" label="角色" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="tel" label="电话号码" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="email" label="邮箱地址" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="name" label="姓名" search="input" lov="1111" sortable="custom"/>
            <el-table-column prop="classId" label="所属班级id" search="input" lov="1111" sortable="custom"/>
        </y-table>
    </div>
</template>

<script>
    export default {
        name: "user-list",
        data() {
            const option = new TableOption({
                queryPage: 'user/queryPage'
            })
            return {
                option,
            }
        },
        methods: {
            newData() {

            },
            updateData() {

            },
            deleteData() {

            },
        }
    }
</script>

<style lang="scss">

</style>