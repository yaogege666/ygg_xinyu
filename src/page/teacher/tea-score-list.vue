<template>
    <div class="tea-score-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="updateData">编辑</el-button>
                <el-button @click="deleteData">删除</el-button>
            </div>
            <el-table-column prop="name" label="学生姓名" search="input" sortable="custom"/>
            <el-table-column prop="className" label="学生班级" search="input" sortable="custom"/>
            <el-table-column prop="reason" label="问题性质" search="lov" lov="REASON" sortable="custom">
                <template slot-scope="{row}">
                    <y-lov-text :value="row.reason" type="REASON"/>
                </template>
            </el-table-column>
            <el-table-column prop="addScore" label="学生加分" search="input" sortable="custom"/>
            <el-table-column prop="decrease" label="学生减分" search="input" sortable="custom"/>
            <el-table-column prop="suggestions" label="老师建议" sortable="custom"/>
        </y-table>
        <el-dialog :visible.sync="dialogVisible" width="500px" :title="isInsert?'新建':'编辑'">

            <el-form label-width="80px" label-position="left" :rules="rules" :model="formData" ref="form">
                <el-form-item label="学生姓名" prop="name">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="所属班级" prop="classId" >
                    <y-object-input :row="formData"
                                    :map="{classId:'id',className:'fullName'}"
                                    :option="clsOption"
                                    showKey="className"/>
                </el-form-item>
                <el-form-item label="问题性质" prop="reason">
                    <y-lov v-model="formData.reason" type="REASON"></y-lov>
                </el-form-item>
                <el-form-item label="学生加分" prop="addScore" required>
                    <el-input v-model="formData.addScore"></el-input>
                </el-form-item>
                <el-form-item label="学生减分" prop="decrease" required>
                    <el-input v-model="formData.decrease"></el-input>
                </el-form-item>
                <el-form-item label="老师建议" prop="suggestions">
                    <el-input v-model="formData.suggestions"></el-input>
                </el-form-item>
            </el-form>
            <el-button slot="footer" @click="save">保存</el-button>
            <el-button slot="footer" @click="cancel">取消</el-button>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "tea-score-list",
        data()  {
            const option = new TableOption({
                queryPage: 'score/queryPage'
            })
            const clsOption = new TableOption({
                queryPage: 'cls/queryPage',
                render() {
                    return (
                        <div>
                            <el-table-column prop="fullName" label="班级" search="input" sortable="custom"/>
                        </div>
                    )
                },
            })
            return {
                option,
                clsOption,
                formData: {},                                                                                   //表单绑定的数据对象
                isInsert: false,                                                                                //当前是否为新建状态
                dialogVisible: false,                                                                           //对话框显示控制变量
                rules: {
                    name: [{required: true, message: '请输入学生姓名', trigger: 'blur'},],                        //表单校验规则
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
                await this.$http.post('score/delete', this.option.selectRow)
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
                await this.$http.post('score/insert', this.formData)
            },
            /**
             * 发送更新数据请求
             * @author  韦胜健
             * @date    2019/1/23 14:56
             */
            async update() {
                await this.$http.post('score/update', this.formData)
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
