<template>
    <div class="tea-content">
        <div class="tea-content-list">
            <div class="tea-content">
                <div class="tea-content-item">
                    <div class="tea-content-item">欢迎！{{teacher.name}}</div>
                    <div class="tea-content-item">工号：{{teacher.code}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tea-content",
        data() {
            return {
                teacher: user
            }
        },
    }
</script>

<style lang="scss">
    .tea-content {
        width: 100%;
        background-color: #f5f5ff;
        color: #0a0a26;
        box-sizing: border-box;
        .tea-content-list {
            width: 100%;
            height: 156px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: white;
            box-shadow: 3px 3px 5px #ddd;
            margin-bottom: 12px;

            .tea-content {
                height: 100px;
                flex: 1;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                .tea-content-item {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }

                &:not(:last-child) {
                    border-right: solid #e8e8e8 1px;
                }
            }

        }

    }
</style>
