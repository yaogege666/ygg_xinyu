<template>
    <div class="home-header">
        <span class="title">学生信誉考评系统</span>
        <div class="home-operator">
            <el-button type="text">注销</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-header"
    }
</script>

<style lang="scss">
    .home-header {
        height: 64px;
        background-color: #2f333e;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        .title {
            font-size: 24px;
            letter-spacing: 6px;
        }
    }
</style>
