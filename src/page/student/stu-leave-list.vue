<template>
    <div class="stu-leave-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="revert">撤回</el-button>
            </div>
            <el-table-column prop="reason" label="问题性质" search="lov" lov="LEAVE_REASON" sortable="custom">
                <template slot-scope="{row}">
                    <y-lov-text :value="row.reason" type="LEAVE_REASON"/>
                </template>
            </el-table-column>
            <el-table-column prop="otherReason" label="其他原因备注" sortable="custom"/>
            <el-table-column prop="startTime" label="开始时间" sortable="custom"/>
            <el-table-column prop="endTime" label="结束时间" sortable="custom"/>
            <el-table-column prop="auditStatus" label="审核状态" search="lov" lov="LEAVE_STATUS" sortable="custom">
                <template slot-scope="{row}">
                    <y-lov-text :value="row.auditStatus" type="LEAVE_STATUS"/>
                </template>
            </el-table-column>
            <!--<el-table-column prop="auditTeacherId" label="审批老师" sortable="custom"/>-->
            <el-table-column prop="teacherName" label="审批老师" sortable="custom"/>
            <el-table-column prop="auditTime" label="审核时间" sortable="custom"/>
            <el-table-column prop="auditComment" label="审核备注" sortable="custom"/>

        </y-table>
        <el-dialog :visible.sync="dialogVisible" width="700px" :title="isInsert?'新建':'编辑'">
            <el-form label-width="100px" label-position="left" :rules="rules" :model="formData" ref="form">
                <el-form-item label="请假原因" prop="reason">
                    <el-radio-group @change="p_reasonChange" v-model="reason">
                        <el-radio v-for="(item,index) in leaveReasons" :key="index" :label="item.label" :value="item.code"/>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="其他请假原因" prop="otherReason" v-if="formData.reason === 'OTHER'">
                    <el-input v-model="formData.otherReason"/>
                </el-form-item>

                <el-form-item label="请假时间">
                    <y-date :start.sync="formData.startTime" :end.sync="formData.endTime" range datetime/>
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
                queryPage: 'leave/queryPage',
                filter: [
                    {field: 'studentId', value: user.id}
                ]
            })
            return {
                leaveReasons: [],
                reason: null,
                ret:{},
                formData: {},                                                                                   //表单绑定的数据对象
                isInsert: false,                                                                                //当前是否为新建状态
                dialogVisible: false,                                                                           //对话框显示控制变量
                option,                                                                                         //表格option

                rules: {
                    code: [{required: true, message: '请输入学号', trigger: 'blur'},],                        //表单校验规则
                },
            }

        },
        async created() {
            this.leaveReasons = await this.$lov.getLovByType("LEAVE_REASON")
            const {ret} = await this.$http.post('user/queryOne', {
                attr1:'allScore',
                id:user.id
            })
            this.ret = ret;
            console.log(ret.allScore)
        },
        computed: {},
        methods: {
            p_reasonChange(label) {
                for (let i = 0; i < this.leaveReasons.length; i++) {
                    const leaveReason = this.leaveReasons[i];
                    if (leaveReason.label === label) {
                        this.$set(this.formData, 'reason', leaveReason.code)
                        return
                    }
                }
            },
            /**
             * 新建数据
             * @author  姚格格
             * @date    2019/1/23 14:55
             */
            newData() {
                if(this.ret.allScore >50) {
                    this.isInsert = true
                    const today = this.$lv.$utils.dateFormat(new Date())
                    this.formData = {
                        startTime: today + ' 08:00:00',
                        endTime: today + ' 18:00:00',
                        auditTeacherId: user.classTeacherId,
                        teacherName: user.classTeacherName,
                        auditStatus: 'NEW',
                        studentId: user.id,
                    }
                    this.dialogVisible = true
                    this.$nextTick(() => this.$refs.form.clearValidate())
                }else {
                    alert('当前信誉不及格！限制请假  分数为：'+this.ret.allScore+'')

                }
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
             * 保存数据
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
                await this.$http.post('leave/insert', this.formData)
            },
            /*
             *  撤回请假记录
             *  @author     martsforever
             *  @datetime   2019/2/4 21:09
             */
            async revert() {
                const data = this.option.selectRow
                if (data.auditStatus !== 'NEW') {
                    this.$message("只能撤回新建状态下的假条！")
                    return
                }
                data.auditStatus = 'REVERT'
                await this.$http.post('leave/update', data)
                await this.option.reload()
            },
        }
    }
</script>

<style lang="scss">
</style>
