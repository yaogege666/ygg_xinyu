<template>
    <div class="home-menu">
        <div class="home-menu-item"
             :class="{'home-menu-item-active':currentPath === item.path}"
             v-for="(item,index) in menus" :key="index" @click="go(item)">
            <div class="home-menu-item-content">
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
                currentPath: null,
                menus: [
                    {
                        name: '学生信息平台',
                        path: '/student/stu-content',
                        icon: 'icon-xuesheng',
                    },
                    {
                        name: '学生考评记录',
                        path: '/student/stu-score',
                    },
                    {
                        name: '学生请假记录',
                        path: '/student/stu-absence-list',
                    },
                    {
                        name: '教师信息平台',
                        path: '/teacher/tea-content',
                    }, {
                        name: '巡视人员平台',
                        path: '/patrol/patrol',
                    },
                    {
                        name: '管理员平台',
                        path: '/admin/admin',
                    },
                    {
                        name: '值列表管理',
                        path: '/admin/lov-list',
                    },
                    {
                        name: 'http请求示例',
                        path: '/demo/demo-http',
                    },
                    {
                        name: '列表展示示例',
                        path: '/demo/demo-table',
                    },

                ]
            }
        },
        methods: {
            go(item) {
                this.currentPath = item.path
                this.$lv.push(item.path, item)
            },
        },
        mounted() {
            this.currentPath = this.$route.path
        },
    }
</script>

<style lang="scss">
    .home-menu {
        width: 200px;
        background-color: #ffffff;
        height: 100%;
        padding: 12px 0;
        margin-right: 12px;
        box-shadow: 0 0 6px #ddd;
        .home-menu-item {
            padding-left: 12px;
            cursor: pointer;
            .home-menu-item-content {
                border-bottom: solid 1px #f2f2f2;
                padding: 12px 0;
                font-size: 14px;
                letter-spacing: 3px;
                .y-icon {
                    margin-right: 12px;
                }
            }
            &:hover, &.home-menu-item-active {
                background-color: #6BB8B8;
                color: white;
                .home-menu-item-content {
                    border-color: #6BB8B8;
                }
            }
        }
    }
</style>
