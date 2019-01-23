<template>
    <el-input class="y-table-filter-input" placeholder="请输入查询关键字" v-model="searchValue" @enter="p_enter" listenKeyboard/>
</template>

<script>
    export default {
        name: "y-table-filter-input",
        props: {
            field: {},
        },
        data() {
            return {
                searchValue: null,
            }
        },
        methods: {
            getFilter() {
                return {
                    value: this.searchValue,
                    operator: '~',
                }
            },
            p_enter() {
                this.$emit('confirm')
            },
        }
    }
</script>

<style lang="scss">
    .y-table-filter-input {
        outline: none;
    }
</style>