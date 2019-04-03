<template>
    <div class="message">
        <y-table :option="option">
            <el-table-column prop="sendId" label="发送方" sortable="custom"/>
            <el-table-column prop="name" label="发送人" sortable="custom"/>
            <el-table-column prop="username" label="工号/学号" sortable="custom"/>
            <el-table-column prop="receiveId" label="接收方" sortable="custom"/>
            <el-table-column prop="info" label="警告信息" sortable="custom"/>
        </y-table>
    </div>
</template>

<script>
    export default {
        name: "message",
        data() {
            const option = new TableOption({
                queryPage: 'message/queryPage',
            })
            return {
                option,
            }
        },
    }
</script>

<style lang="scss">

</style>
