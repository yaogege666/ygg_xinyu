<template>
    <div class="teac_detail">
        教师个人信息
    </div>
</template>

<script>
    export default {
        name: "teac_detail",
        created() {
            console.log(this.$route.query)
        },
    }
</script>

<style lang="scss">

</style>
