<template>
    <div class="cls-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="updateData">编辑</el-button>
                <el-button @click="deleteData">删除</el-button>
            </div>
            <el-table-column prop="grade" label="年级" sortable="custom"/>
            <el-table-column prop="cls" label="班级" sortable="custom"/>
            <el-table-column prop="teacherName" label="班级辅导员" sortable="custom"/>

        </y-table>
        <el-dialog :visible.sync="dialogVisible" width="500px" :title="isInsert?'新建':'编辑'">

            <el-form label-width="80px" label-position="left" :rules="rules" :model="formData" ref="form">
                <el-form-item label="年级" prop="grade">
                    <el-input v-model="formData.grade"></el-input>
                </el-form-item>
                <el-form-item label="班级" prop="cls">
                    <el-input v-model="formData.cls"></el-input>
                </el-form-item>
                <el-form-item label="辅导员" prop="teacherId">
                    <y-object-input :option="teacherOption" :map="{teacherId:'id',teacherName:'name'}" showKey="teacherName" :row="formData"/>
                </el-form-item>
            </el-form>
            <el-button slot="footer" @click="save">保存</el-button>
            <el-button slot="footer" @click="cancel">取消</el-button>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "cls-list",
        data() {
            const option = new TableOption({
                queryPage: 'cls/queryPage'
            })
            const teacherOption = new TableOption({
                queryPage: 'user/queryPage',
                filters: [
                    {field: 'role', value: 'teacher'}
                ],
                render() {
                    return (
                        <div>
                            <el-table-column prop="id" label="编号" sortable="custom"/>
                            <el-table-column prop="name" label="姓名" sortable="custom"/>
                            <el-table-column prop="code" label="工号" sortable="custom"/>
                            <el-table-column prop="tel" label="联系电话" sortable="custom"/>
                        </div>
                    )
                },
            })
            return {
                formData: {},                                                                                   //表单绑定的数据对象
                isInsert: false,                                                                                //当前是否为新建状态
                dialogVisible: false,                                                                           //对话框显示控制变量
                option,                                                                                         //表格option
                teacherOption,
                rules: {
                    grade: [{required: true, message: '请输入年级', trigger: 'blur'},],                        //表单校验规则
                    cls: [{required: true, message: '请输入班级', trigger: 'blur'},],
                },
            }
        },
        methods: {
            /**
             * 新建数据
             * @author  韦胜健
             * @date    2019/1/23 14:55
             */
            newData() {
                this.isInsert = true
                this.formData = {}
                this.dialogVisible = true
                !!this.$refs.form && this.$refs.form.clearValidate()
            },
            /**
             * 编辑数据
             * @author  韦胜健
             * @date    2019/1/23 14:55
             */
            updateData() {
                this.isInsert = false
                this.formData = this.$lv.$utils.deepCopy(this.option.selectRow)
                this.dialogVisible = true
                !!this.$refs.form && this.$refs.form.clearValidate()
            },
            /**
             * 删除数据
             * @author  韦胜健
             * @date    2019/1/23 14:56
             */
            async deleteData() {
                await this.$confirm(`确认要删除第${this.option.selectIndex + 1}条记录吗？`, '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                await this.$http.post('cls/delete', this.option.selectRow)
                await this.option.reload()
                this.$message({type: 'success', message: '删除成功!'});
            },
            /**
             * 取消，关闭对话框
             * @author  韦胜健
             * @date    2019/1/23 14:56
             */
            cancel() {
                this.dialogVisible = false
                this.clear()
            },
            /**
             * 保存数据，根据当前是否为新建还是编辑状态进行操作
             * @author  韦胜健
             * @date    2019/1/23 14:57
             */
            async save() {
                this.$refs.form.validate(async (valid) => {
                    if (valid) {
                        this.isInsert ? await this.insert() : await this.update()
                        await this.option.reload()
                        this.dialogVisible = false
                        this.clear()
                    } else {
                        this.$message('请检查输入是否正确！')
                    }
                });
            },

            /**
             * 发送新建数据请求
             * @author  韦胜健
             * @date    2019/1/23 14:56
             */
            async insert() {
                await this.$http.post('cls/insert', this.formData)
            },
            /**
             * 发送更新数据请求
             * @author  韦胜健
             * @date    2019/1/23 14:56
             */
            async update() {
                await this.$http.post('cls/update', this.formData)
            },
            /**
             * 清空对话框表单数据
             * @author  韦胜健
             * @date    2019/1/23 14:57
             */
            clear() {
                this.formData = {}
            },
        }
    }
</script>

<style lang="scss">

</style>
