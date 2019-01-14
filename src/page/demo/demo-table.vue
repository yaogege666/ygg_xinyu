<template>
    <div class="demo-table">
        <y-table :option="option">
            <el-table-column prop="id" label="编号"/>
            <el-table-column prop="label" label="显示值"/>
            <el-table-column prop="code" label="代码"/>
            <el-table-column prop="type" label="类型"/>
        </y-table>
    </div>
</template>

<script>
    export default {
        name: "demo-table",
        data() {
            const option = new TableOption({
                queryPage: 'lov/queryPage'
            })
            return {
                option
            }
        },
        mounted() {

        },
    }
</script>

<style lang="scss">
    .demo-table {
        height: 100%;
        width: 100%;
        background-color: white;
        overflow: auto;
    }
</style>