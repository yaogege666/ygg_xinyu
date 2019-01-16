<template>
    <div class="app-login">
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