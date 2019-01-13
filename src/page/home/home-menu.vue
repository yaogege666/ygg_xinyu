<template>
    <div class="home-menu">
        <div class="home-menu-item" v-for="(item,index) in menus" :key="index">
            <div class="home-menu-item-content">
                <y-icon :icon="item.icon"/>
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-menu",
        data() {
            return {
                menus: [
                    {
                        name: '学生个人信息',
                        path: 'student/stu-detail',
                        icon: 'icon-user',
                    },
                    {
                        name: '教师个人信息',
                        path: 'teacher/teac-detail',
                        icon: 'icon-user',
                    },

                ]
            }
        },
    }
</script>

<style lang="scss">
    .home-menu {
        width: 200px;
        background-color: white;
        height: 100%;
        padding: 12px 0;
        .home-menu-item {
            padding-left: 12px;
            cursor: pointer;
            .home-menu-item-content {
                border-bottom: solid 1px #ddd;
                padding: 12px 0;
                .lv-icon {
                    margin-right: 12px;
                }
            }
            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
</style>
