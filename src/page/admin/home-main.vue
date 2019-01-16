<template>
    <div class="home-main">
        <span class="home-main-header">信誉考评系统登录入口</span>
        <div>
            <div class="home-main-content"> <a href="">学生登录入口</a></div>

            <div class="home-main-content"><a href="">任课老师登录入口</a></div>
            <div class="home-main-content"><a href="">巡视人员入口</a></div>
            <div class="home-main-content"><a href="">考评管理员登录入口</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-main"
    }
</script>

<style lang="scss">
     .home-main {
         width: 100%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: space-around;
         background-color: #d7dfe2;
         .home-main-header {
             color: blueviolet;
             font-size: 30px;
         }
         .home-main-content {
             width: 300px;
             height: 100px;
             display: flex;
             align-items: center;
             justify-content: space-around;
             background-color: wheat;

         }
         .home-main-content a {
             text-decoration: none;
         }

     }
</style>
