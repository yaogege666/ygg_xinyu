<template>
    <div class="tea-content">
        <div class="tea-content-wrapper">
            <div class="tea-content-header">
                <div class="tea-content-item">姓名：小明</div>
                <br/>
                <div class="tea-content-item">任课班级：软件151</div>
            </div>
            <div class="tea-content-header">
                <div class="tea-content-item">电话号码 </div>
                <br/>
                <div class="tea-content-item">邮箱地址</div>
            </div>

            <div class="tea-content-score">
                <div class="tea-content-score-header">课程受欢迎程度</div>
                <div class="tea-content-score-header">优秀</div>
            </div>
        </div>
        <div class="tea-content-check">
            <tea-check/>
        </div>
        <br/>
        <div class="tea-content-score">
            <tea-score/>
            <tea-score-list/>
        </div>
        <tea_echart/>

    </div>
</template>

<script>
    import TeaScore from "./tea-score";
    import TeaCheck from "./tea-check";
    import TeaScoreList from "./tea-score-list";
    import Tea_echart from "./tea_echart";
    export default {
        name: "tea-content",
        components: {Tea_echart, TeaScoreList, TeaCheck, TeaScore},
        created() {
            console.log(this.$route.query)
        },
    }
</script>

<style lang="scss">
       .tea-content {
           width: 100%;
           padding: 30px;

           background-color: whitesmoke;
           .tea-content-wrapper {
               margin: 10px 25px;
               display: flex;
               align-items: center;
               justify-content: space-between;
               .tea-content-header{
                   width: 270px;
                   height: 150px;
                   border: dashed 1px wheat;
                   box-shadow: 7px 6px 5px #fdffee;
                   margin: 20px 20px;
                   background-color: #fff;
                   float: left;
                   .tea-content-item {
                       padding: 10px;

                   }
               }
               .tea-content-score {
                   width: 270px;
                   height: 150px;
                   border: dashed 1px wheat;
                   box-shadow: 7px 6px 5px #fdffee;
                   background-color: #ffffff;
                   .tea-content-score-header {
                       margin-left: 65px;
                       margin-top: 20px;

                   }


               }
           }
       }


</style>
