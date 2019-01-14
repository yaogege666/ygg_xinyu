<template>
    <div class="home-main">
        <span class="home-main-header">欢迎来到信誉考评系统</span>
        <div>
            <div class="home-main-content">学生登录入口</div>
            <div class="home-main-content">任课老师登录入口</div>
            <div class="home-main-content">考评管理员登录入口</div>
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
         background-color: aquamarine;
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

     }
</style>
