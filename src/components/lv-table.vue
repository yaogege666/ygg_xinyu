<template>
    <el-card class="lv-table" v-if="!!option">
        <el-table :data="option.list"
                  highlight-current-row
                  style="width: 100%"
                  height="600px">
            <el-table-column type="index" width="50"/>
            <slot></slot>
        </el-table>

        <el-pagination layout="prev, pager, next" :total="option.list.length"/>
    </el-card>
</template>

<script>
    export default {
        name: "lv-table",
        props: {
            option: {},
        },
        data() {
            return {}
        },
        mounted() {
            !!this.option && this.option.reload()
        },
    }
</script>

<style lang="scss">
    .lv-table {
        .el-pagination {
            margin-top: 20px;
        }
    }
</style>