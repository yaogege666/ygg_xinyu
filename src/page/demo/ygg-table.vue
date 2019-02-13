<template>
    <el-card class="ygg-table">
        <el-table :data="option.list" ref="table">
            <slot></slot>
        </el-table>
    </el-card>
</template>

<script>
    import YggOption from './YggOption'

    export default {
        name: "ygg-table",
        props: {
            option: {type: YggOption, default: null, required: true}
        },
        data() {
            return {}
        },
        async created() {
            await this.option.load()
        },
        async mounted(){

        },
    }
</script>

<style lang="scss">
    .ygg-table {
        width: 100%;
        display: flex;
        .el-table {
            width: 100%;
        }
    }
</style>
