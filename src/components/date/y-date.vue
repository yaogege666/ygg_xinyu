<template>
    <el-date-picker
            :value="val"
            @input="p_input"
            :value-format="vf"
            :type="type"
            placeholder="请选择时间"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
</template>

<script>
    export default {
        name: "y-date",
        props: {
            value: {},
            range: {type: Boolean},
            datetime: {type: Boolean},
            start: {},
            end: {},
        },
        watch: {
            value(val) {
                if (this.p_value !== val) this.p_value = val
            },
            p_value(val) {
                this.$emit('input', val)
            },
            start(val) {
                if (this.p_start !== val) this.p_start = val
            },
            p_start(val) {
                this.$emit('update:start', val)
            },
            end(val) {
                if (this.p_end !== val) this.p_end = val
            },
            p_end(val) {
                this.$emit('update:end', val)
            },
        },
        data() {
            return {
                p_value: this.value,
                p_start: this.start,
                p_end: this.end,
            }
        },
        computed: {
            val() {
                return !!this.range ? !!this.p_start && !!this.p_end ? [this.p_start, this.p_end] : null : this.p_value
            },
            type() {
                let type = !!this.datetime ? 'datetime' : 'date'
                type = type + (!!this.range ? 'range' : '')
                return type
            },
            vf() {
                let ret = 'yyyy-MM-dd' + (!!this.datetime ? ' HH:mm:ss' : '')
                return ret
            },
        },
        methods: {
            p_input(val) {
                if (!this.range) {
                    this.p_value = val
                } else {
                    if (!val) {
                        this.p_start = null
                        this.p_end = null
                    } else {
                        this.p_start = val[0]
                        this.p_end = val[1]
                    }
                }
            },
        }
    }
</script>

<style lang="scss">

</style>