<template>
    <input type="text" class="y-table-filter-input" placeholder="请输入查询关键字" v-model="searchValue" @keyup.enter="p_enter">
</template>

<script>
    export default {
        name: "y-table-filter-input",
        data() {
            return {
                searchValue: null,
            }
        },
        methods: {
            getFilter() {
                return {
                    value: this.searchField,
                    operator: '~',
                }
            },
            p_enter() {
                console.log('enter')
            },
        }
    }
</script>

<style lang="scss">
    .y-table-filter-input {
        outline: none;
    }
</style>