<template>
    <el-input suffix-icon="el-icon-search" class="y-object-input" @click.native="p_click" readonly :value="row[showKey]"/>
</template>

<script>

    export default {
        name: "y-object-input",
        props: {
            row: {type: Object, required: true},                        //绑定的row对象
            map: {type: Object, required: true},                        //row与选中的row的字段之间的映射规则，map对象中的key为row的key，map中的value为选中row的key
            showKey: {type: String, required: true},                    //row中用来显示在input中的key
            option: {type: Object, required: true},                     //表格option
        },
        methods: {
            p_click() {
                this.$object.pick({
                    option: this.option,
                    confirm: (row) => this.p_confirm(row)
                })
            },
            p_confirm(row) {
                Object.keys(this.map).forEach(key => {
                    this.$set(this.row, key, row[this.map[key]])
                })
            }
        }
    }
</script>

<style lang="scss">
    .y-object-input {

    }
</style>