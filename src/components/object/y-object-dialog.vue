<template>
    <el-dialog :visible.sync="p_value" title="请选择" class="y-object-dialog">
        <y-table :option="option" v-if="initialized" @dblclick="p_dblclick" ref="table"/>
        <div slot="footer">
            <el-button @click="p_cancel">取消</el-button>
            <el-button type="primary" @click="p_confirm">确定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import {ValueMixin} from "../../util/mixin";
    import YTable from "../y-table";

    export default {
        components: {YTable},
        mixins: [ValueMixin],
        name: "y-object-dialog",
        data() {
            return {
                option: null,
                confirm: null,
                cancel: null,
                initialized: false,
            }
        },
        methods: {
            show() {
                this.p_value = true
            },
            hide() {
                this.p_value = false
            },
            p_dblclick() {
                if (this.option.multiSelect) return
                this.p_confirm()
            },
            p_cancel() {
                !!this.cancel && this.cancel()
                this.hide()
            },
            p_confirm() {
                const data = !!this.option.multiSelect ? this.$refs.table.selectDatas : this.option.selectRow
                !!this.confirm && this.confirm(data)
                this.hide()
            },
        }
    }
</script>

<style lang="scss">
    .y-object-dialog {
        .el-dialog__body {
            padding: 0;
        }
    }
</style>