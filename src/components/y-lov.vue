<template>
    <el-select v-model="p_value" placeholder="请选择">
        <el-option
                v-for="item in list"
                :key="item.code"
                :label="item.label"
                :value="item.code">
        </el-option>
    </el-select>
</template>

<script>
    import {ValueMixin} from "../util/mixin";

    export default {
        name: "y-lov",
        mixins: [ValueMixin],
        props: {
            type: {},
        },
        data() {
            return {
                list: []
            }
        },
        async created() {
            this.list = await this.$lov.getLovByType(this.type)
        },

    }
</script>

<style lang="scss">

</style>