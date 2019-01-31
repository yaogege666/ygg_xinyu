<template>
    <div class="stu-leave-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="updateData">编辑</el-button>
                <el-button @click="deleteData">删除</el-button>
            </div>
            <el-table-column prop="code" label="学号" sortable="custom"/>
            <el-table-column prop="leaveReason" label="请假原因" sortable="custom"/>
            <el-table-column prop="startTime" label="请假开始时间" sortable="custom"/>
            <el-table-column prop="endTime" label="请假结束时间" sortable="custom"/>
            <el-table-column prop="classId" label="班级" sortable="custom"/>
            <el-table-column prop="checkTea" label="审核老师" sortable="custom"/>
            <el-table-column prop="checkStatus" label="审核状态" sortable="custom"/>
            <el-table-column prop="checkResult" label="审核结果" sortable="custom"/>
            <el-table-column prop="checkTime" label="审核时间" sortable="custom"/>

        </y-table>
        <el-dialog :visible.sync="dialogVisible" width="700px" :title="isInsert?'新建':'编辑'">
            <el-form label-width="80px" label-position="left" :rules="rules" :model="formData" ref="form">
                <el-form-item label="学号" prop="code" style="width: 330px">
                    <el-input v-model="formData.code"></el-input>
                </el-form-item>
                <el-form-item label="请假原因" prop="absence_reason">
                    <el-radio-group v-model="formData.leaveReason">
                        <el-radio label="身体原因"></el-radio>
                        <el-radio label="参加竞赛活动比赛等"></el-radio>
                        <el-radio label="家中事务"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="课程" prop="course" style="width: 330px">
                    <el-input v-model="formData.course"></el-input>
                </el-form-item>
                <el-form-item label="请假时间">
                    <el-date-picker
                            :value="!!formData.startTime?[formData.startTime,formData.endTime]:null"
                            @input="dateRangeChange"
                            value-format="yyyy-MM-dd"
                            type="daterange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                    {{formData}}
                </el-form-item>
                <el-form-item label="审批老师" prop="checkTea">
                    <el-select v-model="formData.checkTea" placeholder="请选择老师">
                        <el-option label="高数老师" value="math"></el-option>
                        <el-option label="英语老师" value="english"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button slot="footer" @click="save">保存</el-button>
            <el-button slot="footer" @click="cancel">取消</el-button>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        name: "stu_leave_list",
        data() {
            const option = new TableOption({
                queryPage: 'leave/queryPage'
            })
            return {
                formData: {},                                                                                   //表单绑定的数据对象
                isInsert: false,                                                                                //当前是否为新建状态
                dialogVisible: false,                                                                           //对话框显示控制变量
                option,                                                                                         //表格option

                rules: {
                    code: [{required: true, message: '请输入学号', trigger: 'blur'},],                        //表单校验规则
                },
            }
        },
        methods: {
            /**
             * 日期的选择
             * @author  韦胜健
             * @date    2019/1/23 14:55
             */
            dateRangeChange(array) {
                this.$set(this.formData, 'startTime', !!array ? array[0] : null)
                this.$set(this.formData, 'endTime', !!array ? array[1] : null)
                // this.formData.startTime = !!array ? array[0] : null
                // this.formData.endTime = !!array ? array[1] : null
            },
            /**
             * 新建数据
             * @author  韦胜健
             * @date    2019/1/23 14:55
             */
            newData() {
                this.isInsert = true
                this.formData = {}
                this.dialogVisible = true
                this.$nextTick(() => this.$refs.form.clearValidate())
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
                this.$refs.form.clearValidate()
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
                await this.$http.post('leave/delete', this.option.selectRow)
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
                await this.$http.post('leave/insert', this.formData)
            },
            /**
             * 发送更新数据请求
             * @author  韦胜健
             * @date    2019/1/23 14:56
             */
            async update() {
                await this.$http.post('leave/update', this.formData)
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
