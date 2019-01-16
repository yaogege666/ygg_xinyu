<template>
    <div class="app-login">
        <span>登录</span>
        <br/>



        <button @click="login">login</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            login() {
                window.location.href = '/index.html'
            },
        }
    }
</script>

<style lang="scss">

</style>
