<template>
    <el-card class="y-table" v-if="!!option">
        <div slot="header" v-if="option.title">
            <span>{{option.title}}</span>
        </div>
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
                @sort-change="p_sortChange"
                @current-change="p_currentChange"
                @row-dblclick="p_rowDblclick"
                @select="p_select"
                @select-all="p_select">
            <el-table-column type="index" width="50" v-if="option.indexing"/>
            <el-table-column type="selection" width="55" v-if="option.multiSelect"/>
            <el-table-column width="10px"/>
            <slot></slot>
            <pl-render-func :render-func="option.render" v-if="!!option.render"/>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="option.count" @current-change="p_pageChange" @prev-click="p_prevPage" @next-click="p_nextPage"/>
    </el-card>
</template>

<script>
    import YTableFilter from "./y-table-filter";
    import PlRenderFunc from "./render/pl-render-func";

    export default {
        name: "y-table",
        components: {PlRenderFunc, YTableFilter},
        props: {
            option: {},
        },
        data() {
            return {
                columns: null,
                selectDatas: [],
            }
        },
        async mounted() {
            this.option.table = this.$refs.table
            this.option.tableCreated = true
            if (!!this.option && !this.option.parentOption) {
                await this.option.reload()
            }
            this.columns = this.$lv.$utils.findComponentsDownward(this, 'ElTableColumn').filter(col => !!col.prop)
        },
        methods: {
            p_currentChange(selection, row) {
                if (!!selection) {
                    this.option.selectIndex = this.option.list.indexOf(selection)
                    this.option.p_informChildReload()
                }
            },
            p_rowDblclick(row, event) {
                this.$emit('dblclick', {row, event})
            },
            p_select(selection, row) {
                this.selectDatas = selection
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
            async p_sortChange({column, prop, order}) {
                this.option.sortField = prop || 'createdAt'
                this.option.sortDesc = order === 'descending'
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