<template>
    <div class="lov-list">
        <y-table :option="option">
            <div slot="button">
                <el-button @click="newData">新建</el-button>
                <el-button>删除</el-button>
                <el-button>编辑</el-button>
            </div>
            <el-table-column prop="id" label="编号"/>
            <el-table-column prop="label" label="显示值"/>
            <el-table-column prop="code" label="代码"/>
            <el-table-column prop="type" label="类型"/>
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
            <el-button slot="footer" @click="dialogVisible = false">取消</el-button>
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
            cancel() {
                this.clear()
            },
            async save() {
                const ret = !!this.isInsert ? await this.insert() : await this.update()
                await this.option.reload()
                this.dialogVisible = false
                this.clear()
            },
            async insert() {
                await this.$http.post('lov/insert', this.formData)
            },
            async update() {
                await this.$http.post('lov/update', this.formData)
            },
            async delete() {

            },
            clear() {
                this.formData = {}
            },
        }
    }
</script>

<style lang="scss">

</style>