<template>

    <div class="course">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="updateData">编辑</el-button>
                <el-button @click="deleteData">删除</el-button>
            </div>
            <el-table-column prop="name" label="课程名字" search="input" sortable="custom"/>
            <el-table-column prop="teacherName" label="任课老师" search="input" sortable="custom"/>
        </y-table>

        <el-dialog :visible.sync="dialogVisible" width="500px" :title="isInsert?'新建':'编辑'">

            <el-form label-width="80px" label-position="left" :rules="rules" :model="formData" ref="form">
                <el-form-item label="课程名称" prop="name">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="任课老师" prop="teacherName">
                    <y-object-input :row="formData"
                                    :map="{teacherId:'id',teacherName:'name'}"
                                    :option="teacherOption"
                                    showKey="teacherName"/>
                </el-form-item>
            </el-form>
            <el-button slot="footer" @click="save">保存</el-button>
            <el-button slot="footer" @click="cancel">取消</el-button>
        </el-dialog>

        <y-table :option="studentOption">
            <div slot="button">
                <el-button @click="stuNewData">新建</el-button>
                <el-button @click="stuDeleteData">删除</el-button>
            </div>
            <el-table-column prop="userName" label="学生姓名" search="input" sortable="custom"/>
            <el-table-column prop="className" label="班级" search="input" sortable="custom"/>
            <el-table-column prop="userTeacherName" label="学生辅导员" search="input" sortable="custom"/>
        </y-table>
    </div>
</template>

<script>
    export default {
        name: "course",
        data() {
            /*课程option*/
            const option = new TableOption({
                queryPage: 'course/queryPage',
                param:{},
            })
            /*课程任课老师option*/
            const teacherOption = new TableOption({
                queryPage: 'user/queryPage',
                filters: [
                    {field: 'role', value: 'teacher'}
                ],
                render() {
                    return (
                        <div>
                            <el-table-column prop="code" label="工号" sortable="custom"/>
                            <el-table-column prop="name" label="老师名称" sortable="custom"/>
                        </div>
                    )
                },
            })
            /*课程学生option*/
            const studentOption = new TableOption({
                queryPage: 'interUserCourse/queryPage',
                parentOption: option,
                parentMap: {
                    courseId: 'id'
                }
            })
            /*课程选择学生option*/
            const studentPickOption = new TableOption({
                queryPage: 'user/queryPage',
                multiSelect: true,
                filters: [
                    {field: 'role', value: 'student'}
                ],
                render() {
                    return (
                        <div>
                            <el-table-column prop="code" label="学号"/>
                            <el-table-column prop="name" label="学生名称"/>
                        </div>
                    )
                },
                param: {
                    queryType: '',
                    queryValue: '',
                },
            })
            return {
                option,
                teacherOption,
                studentOption,
                studentPickOption,
                formData: {},                                                                                   //表单绑定的数据对象
                isInsert: false,                                                                                //当前是否为新建状态
                dialogVisible: false,                                                                           //对话框显示控制变量
                rules: {
                    name: [{required: true, message: '请输入课程名称', trigger: 'change'},],                        //表单校验规则
                    teacherName: [{required: true, message: '请输入老师名称', trigger: 'change'},],
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
                await this.$http.post('course/delete', this.option.selectRow)
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
                await this.$http.post('course/insert', this.formData)
            },
            /**
             * 发送更新数据请求
             * @author  韦胜健
             * @date    2019/1/23 14:56
             */
            async update() {
                await this.$http.post('course/update', this.formData)
            },
            /**
             * 清空对话框表单数据
             * @author  韦胜健
             * @date    2019/1/23 14:57
             */
            clear() {
                this.formData = {}
            },

            stuNewData() {
                this.studentPickOption.param.queryType = 'queryForCourse'
                this.studentPickOption.param.queryValue = this.option.selectRow.id

                this.$object.pick({
                    option: this.studentPickOption,
                    confirm: async (data) => {
                        const ret = data.map(item => ({
                            courseId: this.option.selectRow.id,
                            userId: item.id
                        }))
                        await this.$http.post('interUserCourse/multiInsert', ret)
                        await this.studentOption.reload()
                    },
                })
            },
            async stuDeleteData() {
                await this.$confirm(`确认要删除第${this.studentOption.selectIndex + 1}条记录吗？`, '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                await this.$http.post('interUserCourse/delete', this.studentOption.selectRow)
                await this.studentOption.reload()
                this.$message({type: 'success', message: '删除成功!'});
            },
        }
    }
</script>

<style lang="scss">

</style>
