<template>
    <div class="stu-detail">
        <span class="stu-detail-index">学生个人基本信息</span>
        <div class="stu-content-wrapper">
            <div class="stu-content">12132</div>
            <div class="stu-content">12132</div>
            <div class="stu-content">12132</div>
            <div class="stu-content">12132</div>
            <div class="stu-content">12132</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "stu_detail"
    }
</script>

<style lang="scss">
    .stu-detail {
        width: 100%;
        background-color: #71e230;
        color: red;
        .stu-content-wrapper {
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
        }

    }
</style>
