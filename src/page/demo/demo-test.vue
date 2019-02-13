<template>
    <div class="demo-test">
        <pl-render-func :render-func="renderButton"
                        v-for="(item,index) in list"
                        :data="item"
                        :key="index"/>
    </div>
</template>

<script>
    import YTableFilter from "../../components/y-table-filter";
    import YggTable from "./ygg-table";
    import YggOption from './YggOption'
    import PlRenderFunc from "../../components/render/pl-render-func";

    export default {
        name: "demo-test",
        components: {PlRenderFunc, YggTable, YTableFilter},
        data() {
            return {
                list: [
                    {name: '张学友'},
                    {name: '周润发'},
                    {name: '吴彦祖'},
                ]
            }
        },
        methods: {
            renderButton(h, data) {
                return (
                    <el-button>这个是按钮:{data.name}</el-button>
                )
            },
        }
    }
</script>

<style lang="scss">

</style>
