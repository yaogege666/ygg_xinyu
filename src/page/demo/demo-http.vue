<template>
    <div class="demo-http">
        <el-card>
            <div slot="header">
                <span>查询值列表数据</span>
            </div>
            <el-button @click="queryData">查询数据</el-button>
            <div>
                <div v-for="item in data">
                    {{item}}
                </div>
            </div>
        </el-card>
        <el-card>
            <div slot="header">
                <span>新建数据</span>
            </div>
            <el-form label-width="80px" style="width:400px">
                <el-form-item label="显示值">
                    <el-input v-model="formData.label"></el-input>
                </el-form-item>
                <el-form-item label="代码">
                    <el-input v-model="formData.code"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-input v-model="formData.type"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="saveInsert">保存</el-button>
            <el-button @click="reset">重置</el-button>
        </el-card>

        <el-card>
            <div slot="header">
                <span>更新数据</span>
            </div>
            <el-form>
                <el-form label-width="80px" style="width:400px">
                    <el-form-item label="id">
                        <el-input v-model="updateData.id"></el-input>
                    </el-form-item>
                    <el-form-item label="显示值">
                        <el-input v-model="updateData.label"></el-input>
                    </el-form-item>
                    <el-form-item label="代码">
                        <el-input v-model="updateData.code"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-input v-model="updateData.type"></el-input>
                    </el-form-item>
                </el-form>
                <el-button @click="queryUpdateData">查询数据详情</el-button>
                <el-button @click="saveUpdate">保存</el-button>
                <el-button @click="reset2">重置</el-button>

            </el-form>
        </el-card>

        <el-card>
            <div slot="header">
                <span>删除数据</span>
            </div>
            <el-form label-width="100px" style="width:400px">
                <el-form-item label="删除记录的id">
                    <el-input v-model="deleteId"></el-input>
                </el-form-item>
                <el-button @click="deleteData">删除</el-button>
            </el-form>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "demo-http",
        data() {
            return {
                data: null,

                formData: {
                    label: null,
                    code: null,
                    type: null,
                },

                updateData: {},
                deleteId: null,
            }
        },
        methods: {
            /**
             * 查询数据
             * @author  韦胜健
             * @date    2019/1/14 20:11
             */
            async queryData() {
                const data = await this.$http.post('lov/queryAll')
                console.log(data)
                this.data = data.ret
            },
            /**
             * 保存插入的数据
             * @author  韦胜健
             * @date    2019/1/14 20:11
             */
            async saveInsert() {
                /*校验数据是否已经必输，可以使用ElementUI的表单校验重写这部分逻辑*/
                if (this.formData.label == null) {
                    this.$message({message: '值列表显示值不能为空'})
                    return
                }
                if (this.formData.code == null) {
                    this.$message({message: '值列表代码不能为空'})
                    return
                }
                if (this.formData.type == null) {
                    this.$message({message: '值列表类型不能为空'})
                    return
                }
                /*发送保存数据请求*/
                await this.$http.post('lov/insert', this.formData)
                /*重新查询数据*/
                await this.queryData()
                /*提示保存成功消息*/
                this.$message({
                    message: '保存成功',
                    type: 'success',
                })
                /*清空表单输入值*/
                this.reset()

            },
            /**
             * 重置表单数据
             * @author  姚格格
             * @date    2019/1/16 20:11
             */
            async reset() {
                this.formData.label = null
                this.formData.code = null
                this.formData.type = null
            },
            /**
             * 查询要被更新的数据
             * @author  韦胜健
             * @date    2019/1/14 20:16
             */
            async queryUpdateData() {
                if (this.updateData.id == null) {
                    this.$message({message: '请输入要查询的记录的id'})
                    return
                }
                const {ret} = await this.$http.post('lov/queryOne', {id: this.updateData.id})
                this.updateData = ret
            },
            /**
             * 保存编辑的数据
             * @author  韦胜健
             * @date    2019/1/14 20:27
             */
            async saveUpdate() {
                /*发送保存数据请求*/
                await this.$http.post('lov/update', this.updateData)
                /*重新查询数据*/
                await this.queryData()
                /*提示保存成功消息*/
                this.$message({
                    message: '保存成功',
                    type: 'success',
                })
            },
            /**
             * 重置要编辑的数据
             * @author  韦胜健
             * @date    2019/1/14 20:27
             */
            reset2() {
                this.updateData.id = null
                this.updateData.label = null
                this.updateData.code = null
                this.updateData.type = null
            },
            /**
             * 根据id删除数据
             * @author  韦胜健
             * @date    2019/1/14 20:27
             */
            async deleteData() {
                if (this.deleteId == null) {
                    this.$message({message: '请输入要删除的记录的id'})
                    return
                }
                await this.$http.post('lov/delete', {id: this.deleteId})
                this.queryData()
                this.$message({
                    message: '刪除成功',
                    type: 'success',
                })
                this.deleteId = null
            },
        }
    }
</script>

<style lang="scss">
    .demo-http {
        height: 100%;
        width: 100%;
        background-color: white;
        overflow: auto;
    }
</style>
