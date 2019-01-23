<template>
    <y-lov class="y-table-filter-lov" :value="val" @input="change" :type="lov"/>
</template>

<script>
    import YLov from "../y-lov";

    export default {
        name: "y-table-filter-lov",
        components: {YLov},
        props: {
            field: {},
            lov: {},
        },
        data() {
            return {
                val: null,
            }
        },
        methods: {
            change(val) {
                this.val = val
                this.p_enter()
            },
            getFilter() {
                return {
                    field: this.field,
                    operator: '=',
                    value: this.val,
                }
            },
            p_enter() {
                this.$emit('confirm')
            },
        }
    }
</script>

<style lang="scss">

</style>