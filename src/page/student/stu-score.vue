<template>
    <div class="stu-content-evaluation">
        <span>任课老师评分意见</span>
        <div class="stu-evaluation">
           <div>任课老师--</div>
            <div>考评时间--</div>
            <div>是否被警告--</div>
            <div>在校现象--</div>
            <div>学生性质--</div>
            <div>老师意见--</div>
        </div>
        <br/>
        <div class="stu-evaluation">

        </div>
        <br/>
        <div class="stu-evaluation">

        </div>
        <br/>
        <div class="stu-evaluation">

        </div>

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
        background-color: #f5f5ff;
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
            background-color: #ffffff;
        }

    }
</style>
