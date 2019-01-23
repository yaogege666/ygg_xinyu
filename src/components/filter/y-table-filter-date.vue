<template>
    <el-date-picker class="y-table-filter-date" placeholder="选择日期" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :value="value" @input="change"/>
</template>

<script>
    export default {
        name: "y-table-filter-date",
        props: {
            field: {},
        },
        data() {
            return {
                value: [],
            }
        },
        methods: {
            change(val) {
                this.value = val
                this.p_enter()
            },
            getFilter() {
                const ret = []
                !!this.value && ret.push({value: this.$lv.$utils.dateFormat(this.value[0], 'YYYY-MM-DD') + " 00:00:00", operator: '>=', field: this.field, dateFormat: true})
                !!this.value && ret.push({value: this.$lv.$utils.dateFormat(this.value[1], 'YYYY-MM-DD') + " 23:59:59", operator: '<=', field: this.field, dateFormat: true})
                return ret
            },
            p_enter() {
                this.$emit('confirm')
            },
        }
    }
</script>

<style lang="scss">

</style>