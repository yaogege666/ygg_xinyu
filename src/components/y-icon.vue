<template>
    <svg class="y-icon"
         aria-hidden="true"
         @click="e=>$emit('click',e)">
        <use :xlink:href="`#${icon}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "y-icon",
        props: {
            icon: {},
        }
    }
</script>

<style lang="scss">
    .y-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
