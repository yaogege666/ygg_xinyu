<template>
    <el-card class="lv-table" v-if="!!option">
        <div class="lv-table-button">
            <slot name="button"></slot>
        </div>
        <el-table
                ref="table"
                :data="option.list"
                highlight-current-row
                style="width: 100%"
                height="600px"
                @current-change="p_select">

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
        async mounted() {
            this.option.table = this.$refs.table
            if (!!this.option) {
                await this.option.reload()
            }
        },
        methods: {
            p_select(selection, row) {
                if (!!selection) {
                    this.option.selectIndex = this.option.list.indexOf(selection)
                }
            },
        }
    }
</script>

<style lang="scss">
    .lv-table {
        .el-pagination {
            margin-top: 20px;
        }
        .lv-table-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 36px;
        }
    }
</style>