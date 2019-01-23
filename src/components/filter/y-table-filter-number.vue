<template>
    <div class="y-table-filter-number">
        <el-input placeholder="最小值" v-model="start" @enter="p_enter" listenKeyboard></el-input>
        -
        <el-input placeholder="最大值" v-model="end" @enter="p_enter" listenKeyboard></el-input>
    </div>
</template>

<script>
    export default {
        name: "y-table-filter-number",
        props: {
            field: {},
        },
        data() {
            return {
                start: null,
                end: null,
            }
        },
        methods: {
            getFilter() {
                const ret = []
                if (this.start != null) ret.push({value: this.start, operator: '>=', field: this.field})
                if (this.end != null) ret.push({value: this.end, operator: '<=', field: this.field})
                return ret
            },
            p_enter() {
                this.$emit('confirm')
            },
        }
    }
</script>

<style lang="scss">
    .y-table-filter-number {
        display: flex;
        align-items: center;
    }
</style>