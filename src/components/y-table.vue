<template>
    <el-card class="y-table" v-if="!!option">
        <div class="y-table-button">
            <y-table-filter :columns="columns" @confirm="p_filterChange"/>
            <div>
                <slot name="button"></slot>
            </div>
        </div>
        <el-table
                ref="table"
                :data="option.list"
                highlight-current-row
                style="width: 100%"
                height="452px"
                @current-change="p_select">

            <el-table-column type="index" width="50"/>
            <slot></slot>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="option.count" @current-change="p_pageChange" @prev-click="p_prevPage" @next-click="p_nextPage"/>
    </el-card>
</template>

<script>
    import YTableFilter from "./y-table-filter";

    export default {
        name: "y-table",
        components: {YTableFilter},
        props: {
            option: {},
        },
        data() {
            return {
                columns: null,
            }
        },
        async mounted() {
            this.option.table = this.$refs.table
            if (!!this.option) {
                await this.option.reload()
            }
            this.columns = this.$lv.$utils.findComponentsDownward(this, 'ElTableColumn').filter(col => !!col.prop)
        },
        methods: {
            p_select(selection, row) {
                if (!!selection) {
                    this.option.selectIndex = this.option.list.indexOf(selection)
                }
            },
            async p_pageChange(page) {
                this.option.page = page
                await this.option.load()
            },
            async p_prevPage() {
                if (this.option.page <= 1) return
                this.option.page--
                await this.option.load()
            },
            async p_nextPage() {
                if (this.option.noMore && this.option.list.length < this.option.pageSize) {
                    return
                }
                this.option.page++
                await this.option.load()
            },
            async p_filterChange(filter) {
                this.option.filter = filter
                await this.option.reload()
            },
        }
    }
</script>

<style lang="scss">
    .y-table {
        .el-pagination {
            margin-top: 20px;
        }
        .y-table-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 36px;
        }
    }
</style>