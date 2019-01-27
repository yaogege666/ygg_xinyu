<template>
    <span>{{showLabel}}</span>
</template>

<script>
    import {ValueMixin} from "../../util/mixin";

    export default {
        name: "y-lov-text",
        mixins: [ValueMixin],
        props: {
            type: {required: true, type: String},
        },
        data() {
            return {
                list: [],
            }
        },
        computed: {
            showLabel() {
                for (let i = 0; i < this.list.length; i++) {
                    const item = this.list[i];
                    if (item.code === this.value) return item.label
                }
                return this.value
            },
        },
        async created() {
            this.list =await this.$lov.getLovByType(this.type)
        },
    }
</script>

<style lang="scss">

</style>