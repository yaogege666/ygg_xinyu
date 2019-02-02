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
    import {getModuleStore} from "../../util/store";

    const {mapGetters} = getModuleStore('user')

    export default {
        name: "home-menu",
        data() {
            return {
                /*@formatter:off*/
                currentPath: null,
                ui:null,
                totalMenus: [
                    {name: '学生信息', path: '/student/stu-content',role:'student'},
                    {name: '考评记录', path: '/student/stu-score',role:'student'},
                    {name: '请假记录', path: '/student/stu-leave-list',role:'student'},
                    {name: '我的课程', path: '/student/stu-course-list',role:'student'},

                    {name: '教师信息', path: '/teacher/tea-content',role:'teacher'},
                    {name: '学生请假审批', path: '/teacher/tea-check',role:'teacher'},

                    {name: '学生信誉记录考评', path: '/teacher/tea-score-list',role:'patrol teacher'},
                    {name: '巡视人员', path: '/patrol/patrol',role:'patrol teacher'},

                    {name: '管理员', path: '/admin/admin',role:'admin'},
                    {name: '用户管理', path: '/admin/user-list',role:'admin'},
                    {name: '班级管理', path: '/admin/cls-list',role:'admin'},
                    {name: '值列表管理', path: '/admin/lov-list',role:'admin'},
                    {name: '课程管理', path: '/admin/course',role:'admin'},
                    // {name: 'http请求示例', path: '/demo/demo-http',},
                    // {name: '列表展示示例', path: '/demo/demo-table',},
                    // {name: '测试', path: '/demo/demo-test',},
                    // {name: '对象选择示例', path: '/demo/demo-object',},
                ]
                /*@formatter:on*/
            }
        },
        methods: {
            go(item) {
                this.currentPath = item.path
                this.$lv.push(item.path, item)
            },
        },
        computed: {
            ...mapGetters(['userInfo']),
            menus() {
                if (!this.userInfo) return []
                return this.totalMenus.filter(item => item.role === this.userInfo.role)
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
        overflow-y: auto;
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
