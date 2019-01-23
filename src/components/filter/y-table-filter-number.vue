<template>
    <div class="y-table-filter-number">
        <el-input placeholder="最小值"></el-input>
        -
        <el-input placeholder="最大值"></el-input>
    </div>
</template>

<script>
    export default {
        name: "y-table-filter-number"
    }
</script>

<style lang="scss">
    .y-table-filter-number {
        display: flex;
        align-items: center;
    }
</style>