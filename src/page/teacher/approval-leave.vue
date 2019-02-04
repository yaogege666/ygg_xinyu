<template>
    <div class="approval-leave">
        <y-table :option="option">
            <el-table-column prop="studentName" label="学生" sortable="custom"></el-table-column>
            <el-table-column prop="className" label="班级" sortable="custom"></el-table-column>
            <el-table-column prop="reason" label="问题性质" search="lov" lov="LEAVE_REASON" sortable="custom">
                <template slot-scope="{row}">
                    <y-lov-text :value="row.reason" type="LEAVE_REASON"/>
                </template>
            </el-table-column>
            <el-table-column prop="otherReason" label="其他原因" sortable="custom"></el-table-column>
            <el-table-column prop="startTime" label="请假开始时间" sortable="custom" width="200px"></el-table-column>
            <el-table-column prop="endTime" label="请假结束时间" sortable="custom" width="200px"></el-table-column>
            <el-table-column prop="auditStatus" label="审核状态" search="lov" lov="LEAVE_STATUS" sortable="custom">
                <template slot-scope="{row}">
                    <y-lov-text :value="row.auditStatus" type="LEAVE_STATUS"/>
                </template>
            </el-table-column>
            <el-table-column prop="auditComment" label="审批备注" sortable="custom"></el-table-column>
            <el-table-column prop="auditTime" label="审批时间" sortable="custom"></el-table-column>
            <el-button slot="button" @click="approval">审批</el-button>
        </y-table>

        <el-dialog :visible.sync="dialogVisible" width="700px" :title="isInsert?'新建':'编辑'">
            <el-form label-width="100px" label-position="left" :model="formData" ref="form">
                <el-form-item label="审批备注" prop="auditComment">
                    <el-input v-model="formData.auditComment"/>
                </el-form-item>
            </el-form>
            <el-button slot="footer" @click="accept">同意</el-button>
            <el-button slot="footer" @click="reject">拒绝</el-button>
        </el-dialog>
    </div>
</template>

<script>
    import TableOption from "../../components/TableOption";

    export default {
        name: "approval-leave",
        data() {
            const option = new TableOption({
                queryPage: 'leave/queryPage',
                filters: [
                    {field: 'auditStatus', value: 'REVERT', operator: '!='},
                    {field: 'auditTeacherId', value: user.id}
                ]
            })

            return {
                option,
                formData: {},
                dialogVisible: false,
                isInsert: false,
            }
        },
        methods: {
            approval() {
                this.formData = this.$lv.$utils.deepCopy(this.option.selectRow)
                if (this.formData.auditStatus !== 'NEW') {
                    this.$message("只能审批新建状态下的假条！")
                    return
                }
                this.isInsert = false
                this.dialogVisible = true
                !!this.$refs.form && this.$refs.form.clearValidate()
            },
            accept() {
                this.formData.auditStatus = 'ACCEPT'
                this.save()
            },
            reject() {
                this.formData.auditStatus = 'REJECT'
                this.save()
            },
            async save() {
                this.formData.auditTime = this.$lv.$utils.dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
                await this.$http.post('leave/update', this.formData)
                await this.option.reload()
                this.dialogVisible = false
            },
        }
    }
</script>

<style lang="scss">

</style>