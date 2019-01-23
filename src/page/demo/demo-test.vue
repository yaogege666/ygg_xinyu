<template>
    <div class="demo-test">
        <el-button>value:{{v}}</el-button>
        <y-lov type="REASON" v-model="v"/>
        <y-lov type="REASON" value="skipping"/>
    </div>
</template>

<script>
    import YTableFilter from "../../components/y-table-filter";
    export default {
        name: "demo-test",
        components: {YTableFilter},
        data() {
            return {
                v: null
            }
        },
    }
</script>

<style lang="scss">

</style>