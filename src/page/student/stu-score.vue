<template>
    <div class="stu-content-evaluation">
        <span>任课老师评分意见</span>
        <div class="stu-evaluation">数学老师</div>
        <br/>
        <div class="stu-evaluation">英语老师</div>
        <br/>
        <div class="stu-evaluation">语文老师</div>
        <br/>
        <div class="stu-evaluation">巡视老师</div>

    </div>
</template>

<script>
    export default {
        name: "stu_score"
    }
</script>

<style lang="scss">
    .stu-content-evaluation {
        width: 100%;
        height: 400px;
        background-color: #d7dfe2;
        .stu-evaluation {
            width: 1070px;
            height: 70px;
            border: dashed 1px wheat;
            box-shadow: 7px 6px 5px #fdffee;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 50px;
            margin-top: 10px;
            background-color: #fff;
        }

    }
</style>
