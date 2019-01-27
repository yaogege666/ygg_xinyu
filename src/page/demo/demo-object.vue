<template>
    <div class="demo-object">
        <el-button @click="service1">service1</el-button>
        <el-button @click="service2">service2</el-button>
        selectRow:{{selectRow}}
    </div>
</template>

<script>
    export default {
        name: "demo-object",
        data() {
            return {
                selectRow: null
            }
        },
        methods: {
            service1() {
                this.$object.pick({
                    option: new TableOption({
                        queryPage: 'lov/queryPage',
                        render() {
                            return (
                                <template>
                                    <el-table-column prop="id" label="编号"/>
                                    <el-table-column prop="label" label="显示值"/>
                                    <el-table-column prop="code" label="代码"/>
                                    <el-table-column prop="type" label="类型"/>
                                </template>
                            )
                        },
                    }),
                    confirm: (selectRow) => {
                        this.selectRow = selectRow
                    },
                    cancel() {
                        console.log('cancel');
                    },
                })
            },
            service2(){
                this.$object.pick({
                    option: new TableOption({
                        queryPage: 'user/queryPage',
                        multiSelect:true,
                        render() {
                            return (
                                <template>
                                    <el-table-column prop="id" label="编号"/>
                                    <el-table-column prop="username" label="用户名"/>
                                    <el-table-column prop="code" label="工号/学号"/>
                                    <el-table-column prop="role" label="角色"/>
                                </template>
                            )
                        },
                    }),
                    confirm: (selectRow) => {
                        this.selectRow = selectRow
                    },
                    cancel() {
                        console.log('cancel');
                    },
                })
            },
        }
    }
</script>

<style lang="scss">

</style>