<template>
    <div class="lov-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button @click="updateData">编辑</el-button>
                <el-button @click="deleteData">删除</el-button>
            </div>
            <el-table-column prop="id" label="编号" search="input"/>
            <el-table-column prop="label" label="显示值" search="lov"/>
            <el-table-column prop="code" label="代码" search="date"/>
            <el-table-column prop="type" label="类型" search="input"/>
        </y-table>

        <el-dialog :visible.sync="dialogVisible" width="500px" :title="isInsert?'新建':'编辑'">

            <el-form label-width="80px" label-position="left" :rules="rules" :model="formData">
                <el-form-item label="显示值" prop="label">
                    <el-input v-model="formData.label"></el-input>
                </el-form-item>
                <el-form-item label="代码" prop="code">
                    <el-input v-model="formData.code"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="type">
                    <el-input v-model="formData.type"></el-input>
                </el-form-item>
            </el-form>
            <el-button slot="footer" @click="save">保存</el-button>
            <el-button slot="footer" @click="cancel">取消</el-button>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "lov-list",
        data() {
            const option = new TableOption({
                queryPage: 'lov/queryPage'
            })
            return {
                formData: {},
                isInsert: false,
                dialogVisible: false,
                option,

                rules: {
                    label: [{required: true, message: '请输入显示值', trigger: 'blur'},],
                    code: [{required: true, message: '请输入代码', trigger: 'blur'},],
                    type: [{required: true, message: '请输入类型', trigger: 'blur'},],
                },
            }
        },
        methods: {
            newData() {
                this.isInsert = true
                this.formData = {}
                this.dialogVisible = true
            },
            updateData() {
                this.isInsert = false
                this.formData = this.$lv.$utils.deepCopy(this.option.selectRow)
                this.dialogVisible = true
            },
            cancel() {
                this.clear()
            },
            async save() {
                const ret = !!this.isInsert ? await this.insert() : await this.update()
                await this.option.reload()
                this.dialogVisible = false
                this.clear()
                return ret
            },
            async insert() {
                await this.$http.post('lov/insert', this.formData)
            },
            async update() {
                await this.$http.post('lov/update', this.formData)
            },
            async deleteData() {
                await this.$confirm(`确认要删除第${this.option.selectIndex + 1}条记录吗？`, '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                await this.$http.post('lov/delete', this.option.selectRow)
                await this.option.reload()
                this.$message({type: 'success', message: '删除成功!'});
            },
            clear() {
                this.formData = {}
            },
        }
    }
</script>

<style lang="scss">

</style>