<template>
    <div class="tea-content">
        <div class="tea-content-check">
            <tea-check/>
        </div>
        <br/>
        <div class="tea-content-score">
            <tea-score/>
            <tea-score-list/>
        </div>

    </div>
</template>

<script>
    import TeaScore from "./tea-score";
    import TeaCheck from "./tea-check";
    import TeaScoreList from "./tea-score-list";
    export default {
        name: "tea-content",
        components: {TeaScoreList, TeaCheck, TeaScore},
        created() {
            console.log(this.$route.query)
        },
    }
</script>

<style lang="scss">
       .tea-content {
           padding: 30px;
           margin: 20px;
       }


</style>
