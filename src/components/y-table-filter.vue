<template>
    <div class="y-table-filter">
        <el-select v-model="searchField" placeholder="查询字段" class="field-select">
            <el-option
                    v-for="item in columns"
                    :key="item.prop"
                    :label="item.label"
                    :value="item.prop">
            </el-option>
        </el-select>
        <component :is="`y-table-filter-${searchType}`" class="y-table-filter-component" ref="filter" @confirm="confirm" :field="searchField" :lov="!!column?column.lov:null"/>
        <el-button @click="confirm">
            <y-icon icon="icon-search"/>
            查询
        </el-button>
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
            column() {
                if (!this.columns || this.columns.length === 0) return
                for (let i = 0; i < this.columns.length; i++) {
                    const column = this.columns[i];
                    if (column.prop === this.searchField) return column
                }
                return null
            },
            searchType() {
                if (!this.columns || this.columns.length === 0) return 'input'
                for (let i = 0; i < this.columns.length; i++) {
                    const col = this.columns[i];
                    if (col.prop === this.searchField) return col.search || 'input'
                }
                return 'input'
            },
        },
        methods: {
            confirm() {
                const filter = this.$refs.filter.getFilter()
                switch (this.$lv.$utils.typeOf(filter)) {
                    case 'object':
                        filter.field = this.searchField
                        break
                    case 'array':
                        filter.forEach(item => item.field = this.searchField)
                }
                this.$emit('confirm', filter)
            },
        }
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
            width: 220px;
        }
        input, button, .el-date-editor {
            border: none;
        }
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        padding: 1px;
        border-radius: 4px;
        .field-select {
            width: 150px;
        }
    }
</style>