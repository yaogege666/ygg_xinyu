<template>
    <div class="demo-test">
        <el-button>value:{{v}}</el-button>
        <y-lov type="REASON" v-model="v"/>
        <y-lov type="REASON" value="skipping"/>
    </div>
</template>

<script>
    export default {
        name: "demo-test",
        data() {
            return {
                v: null
            }
        },
    }
</script>

<style lang="scss">

</style>