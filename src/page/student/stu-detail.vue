<template>
    <div class="stu-detail">
        <span class="stu-detail-index">学生个人基本信息</span>
        <div class="stu-content">12132</div>
        <div class="stu-content">12132</div>
        <div class="stu-content">12132</div>
        <div class="stu-content">12132</div>
        <div class="stu-content">12132</div>
    </div>
</template>
<script>
    export default {
        name: "stu_detail"
    }
</script>

<style lang="scss">
    .stu-detail {
        height: 30%;
        width: 100%;
        background-color: #71e230;
        color: red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .stu-content {
            width: 250px;
            height: 150px;
            margin: 20px 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e1b7e2;
            float: left;
        }
        .stu-detail-index {
            position: absolute;
            left: 162px;
            top: 62px;
        }
    }
</style>
