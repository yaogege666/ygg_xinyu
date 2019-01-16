<template>
    <div class="home-menu">
        <div class="home-menu-item" v-for="(item,index) in menus" :key="index" @click="go(item)">
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
                        name: '首页',
                        path: '/admin/home-main',
                        icon: 'icon-shouye',
                    },
                    {
                        name: '学生信息平台',
                        path: '/student/stu-content',
                        icon: 'icon-xuesheng',
                    },
                    {
                        name: '教师信息平台',
                        path: '/teacher/tea-content',
                        icon: 'icon-laoshi',
                    }, {
                        name: '巡视人员平台',
                        path: '/patrol/patrol',
                        icon: 'icon-teacher',
                    },
                    {
                        name: '管理员平台',
                        path: '/admin/admin',
                        icon: 'icon-guanliyuan',
                    },
                    {
                        name: 'http请求示例',
                        path: '/demo/demo-http',
                        icon: 'icon-web3',
                    },
                    {
                        name: '列表展示示例',
                        path: '/demo/demo-table',
                        icon: 'icon-table',
                    },
                ]
            }
        },
        methods: {
            go(item) {
                this.$lv.push(item.path, item)
            },
        }
    }
</script>

<style lang="scss">
    .home-menu {
        width: 200px;
        background-color: #ffffff;
        height: 100%;
        padding: 12px 0;
        .home-menu-item {
            padding-left: 12px;
            cursor: pointer;
            .home-menu-item-content {
                border-bottom: dashed 1px #d7dfe2;
                padding: 12px 0;
                .lv-icon {
                    margin-right: 12px;
                }
            }
            &:hover {
                background-color: #f8e9e9;
            }
        }
    }
</style>
