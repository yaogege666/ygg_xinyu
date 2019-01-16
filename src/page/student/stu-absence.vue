<template>
    <div class="stu-content-absence">
        <div class="stu-absence-index">学生请假栏目</div>
        <div class="stu-absence">
            表单：填写具体的请假信息
        </div>
        <button>提交信息</button>
    </div>
</template>

<script>
    export default {
        name: "stu_absence"
    }
</script>

<style lang="scss">
    .stu-content-absence {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5ff;
        .stu-absence {
            width: 700px;
            height: 250px;
            border: dashed 1px wheat;
            box-shadow: 6px 5px 5px #fdffee;
            margin: 60px 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
        }
    }
</style>
