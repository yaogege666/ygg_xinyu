<template>
    <div class="tea-score-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="updateData">编辑</el-button>
                <el-button @click="deleteData">删除</el-button>
            </div>
            <el-table-column prop="courseName" label="课程名称" search="input" sortable="custom"/>
            <el-table-column prop="courseTeacherName" label="任课老师" search="input" sortable="custom"/>
            <el-table-column prop="studentName" label="学生姓名" search="input" sortable="custom"/>
            <el-table-column prop="studentClassName" label="学生班级" search="input" sortable="custom"/>
            <el-table-column prop="studentTeacherName" label="学生辅导员" search="input" sortable="custom"/>
            <el-table-column prop="reason" label="考评性质" search="lov" lov="REASON" sortable="custom">
                <template slot-scope="{row}">
                    <y-lov-text :value="row.type" type="REASON"/>
                </template>
            </el-table-column>
            <el-table-column prop="score" label="扣分" search="input" sortable="custom"/>
            <el-table-column prop="comment" label="考评备注" search="input" sortable="custom"/>
            <el-table-column prop="checkTime" label="考评时间" search="input" sortable="custom"/>
        </y-table>
        <el-dialog :visible.sync="dialogVisible" width="500px" :title="isInsert?'新建':'编辑'">

            <el-form label-width="80px" label-position="left" :rules="rules" :model="formData" ref="form">
                <el-form-item label="课程" prop="courseName">
                    <y-object-input :option="courseOption" :map="{courseId:'id',courseName:'name'}" showKey="courseName" :row="formData"/>
                </el-form-item>
                <el-form-item label="学生" prop="courseName">
                    <y-object-input :option="studentOption" :map="{studentId:'userId',studentName:'userName'}" showKey="studentName" :row="formData" :before-select="beforeSelectStudent"/>
                </el-form-item>
                <el-form-item label="考评性质" prop="type">
                    <y-lov type="REASON" v-model="formData.type"/>
                </el-form-item>
                <el-form-item label="考评备注" prop="comment">
                    <el-input v-model="formData.comment"/>
                </el-form-item>
                <el-form-item label="扣分" prop="score">
                    <el-radio-group v-model="formData.score">
                        <el-radio label="-1"/>
                        <el-radio label="-2"/>
                        <el-radio label="-5"/>
                    </el-radio-group>
                    <el-input v-model="formData.score"/>
                </el-form-item>
                <el-form-item label="考评时间" prop="checkTime">
                    <y-date v-model="formData.checkTime" datetime/>
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
        data() {
            const option = new TableOption({
                queryPage: 'score/queryPage'
            })
            const courseOption = new TableOption({
                queryPage: 'course/queryPage',
                render() {
                    return (
                        <div>
                            <el-table-column prop="name" label="课程名称"/>
                            <el-table-column prop="teacherName" label="任课老师"/>
                        </div>
                    )
                },
            })
            const studentOption = new TableOption({
                queryPage: 'interUserCourse/queryPage',
                render() {
                    return (
                        <div>
                            <el-table-column prop="userName" label="学生姓名"/>
                            <el-table-column prop="className" label="班级"/>
                            <el-table-column prop="userTeacherName" label="辅导员"/>
                        </div>
                    )
                },
                beforeLoad: (url, param) => {
                    console.log('student beforeLoad', this.courseOption)
                    studentOption.setFilter({
                        field: 'courseId',
                        value: this.courseOption.selectRow.id
                    })
                }
            })
            return {
                option,
                courseOption,
                studentOption,
                formData: {},                                                                                   //表单绑定的数据对象
                isInsert: false,                                                                                   //当前是否为新建状态
                dialogVisible: false,                                                                           //对话框显示控制变量
                rules: {
                    name: [{required: true, message: '请输入学生姓名', trigger: 'blur'},],                        //表单校验规则
                },
            }
        },
        methods: {
            /**
             * 新建数据
             * @author  姚格格
             * @date    2019/1/23 14:55
             */
            newData() {
                this.isInsert = true
                this.formData = {
                    score: '-1',
                    checkTime: this.$lv.$utils.dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss'),
                    checkTeacherId: user.id,
                }
                this.dialogVisible = true
                !!this.$refs.form && this.$refs.form.clearValidate()
            },
            /**
             * 编辑数据
             * @author  姚格格
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
             * @author  姚格格
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
             * @author  姚格格
             * @date    2019/1/23 14:56
             */
            cancel() {
                this.dialogVisible = false
                this.clear()
            },
            /**
             * 保存数据，根据当前是否为新建还是编辑状态进行操作
             * @author  姚格格
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
             * @author  姚格格
             * @date    2019/1/23 14:56
             */
            async insert() {
                await this.$http.post('score/insert', this.formData)
            },
            /**
             * 发送更新数据请求
             * @author  姚格格
             * @date    2019/1/23 14:56
             */
            async update() {
                await this.$http.post('score/update', this.formData)
            },
            /**
             * 清空对话框表单数据
             * @author  姚格格
             * @date    2019/1/23 14:57
             */
            clear() {
                this.formData = {}
            },

            beforeSelectStudent() {
                if (!this.formData.courseId) {
                    this.$message("请先选择课程！")
                    return Promise.reject("请先选择课程！")
                }
            },
        }

    }
</script>

<style lang="scss">


</style>
