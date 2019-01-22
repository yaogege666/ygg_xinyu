<template>
    <div class="y-table-filter">
        <el-select v-model="searchField" placeholder="查询字段">
            <el-option
                    v-for="item in columns"
                    :key="item.prop"
                    :label="item.label"
                    :value="item.prop">
            </el-option>
        </el-select>
        <component :is="`y-table-filter-${searchType}`" class="y-table-filter-component"></component>
        <el-button>查询</el-button>
    </div>
</template>

<script>
    import YTableFilterDate from "./filter/y-table-filter-date";
    import YTableFilterInput from "./filter/y-table-filter-input";
    import YTableFilterNumber from "./filter/y-table-filter-number";
    import YTableFilterLov from "./filter/y-table-filter-lov";

    export default {
        name: "y-table-filter",
        components: {YTableFilterLov, YTableFilterNumber, YTableFilterInput, YTableFilterDate},
        props: {
            columns: {}
        },
        watch: {
            columns: {
                immediate: true,
                handler(val) {
                    !!val && (this.searchField = val[0].prop)
                }
            },
        },
        data() {
            return {
                searchField: null,
            }
        },
        computed: {
            searchType() {
                if (!this.columns || this.columns.length === 0) return 'input'
                for (let i = 0; i < this.columns.length; i++) {
                    const col = this.columns[i];
                    if (col.prop === this.searchField) return col.search || 'input'
                }
                return 'input'
            },
        },
    }
</script>

<style lang="scss">
    .y-table-filter {
        display: flex;
        align-items: center;
        & > * {
            flex-shrink: 0;
        }
        .y-table-filter-component {
            width: 350px;
        }
    }
</style>