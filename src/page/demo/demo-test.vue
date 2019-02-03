<template>
    <div class="demo-test">
        <el-button>value:{{v}}</el-button>
        <y-lov type="REASON" v-model="v"/>
        <y-lov type="REASON" value="skipping"/>
        <y-lov-text type="REASON" value="skipping"/>

        <y-date v-model="val" datetime/>
        val:{{val}}
        formData:{{formData}}
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
                    // startTime: null,
                    // endTime: null
                },
            }
        },
        methods: {
            dateRangeChange(array) {
                this.formData.startTime = !!array ? array[0] : null
                this.formData.endTime = !!array ? array[1] : null
            },
        }
    }
</script>

<style lang="scss">

</style>
