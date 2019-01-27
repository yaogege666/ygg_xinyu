<template>
    <div class="demo-test">
        <el-button>value:{{v}}</el-button>
        <y-lov type="REASON" v-model="v"/>
        <y-lov type="REASON" value="skipping"/>
        <y-lov-text type="REASON" value="skipping"/>

        <el-date-picker
                :value="!!formData.startTime?[formData.startTime,formData.endTime]:null"
                @input="dateRangeChange"
                value-format="yyyy-MM-dd"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
        </el-date-picker>
    </div>
</template>

<script>
    import YTableFilter from "../../components/y-table-filter";

    export default {
        name: "demo-test",
        components: {YTableFilter},
        data() {
            return {
                val: null,
                v: null,

                formData: {
                    startTime: null,
                    endTime: null
                },
            }
        },
        methods:{
            dateRangeChange(array){
                this.formData.startTime = !!array?array[0]:null
                this.formData.endTime = !!array?array[1]:null
            },
        }
    }
</script>

<style lang="scss">

</style>
