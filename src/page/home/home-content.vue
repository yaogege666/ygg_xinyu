<template>
    <div class="home-content">
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
    </div>
</template>

<script>
    export default {
        name: "home-content"
    }
</script>

<style lang="scss">
    .home-content {
        flex: 1;
        height: 100%;
        background-color: cadetblue;
        overflow: auto;
        .box{
            height: 200px;
            width: 100px;
            background-color: blanchedalmond;
        }
    }
</style>
