<template>
    <div class="home-menu">
        <div class="home-menu-wrapper">
            <div class="home-menu-item"
                 :class="{'home-menu-item-active':currentPath === item.path}"
                 v-for="(item,index) in menus" :key="index" @click="go(item)">
                <div class="home-menu-item-content">
                    <span>{{item.name}}</span>
                </div>
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
                    /*学生*/
                    {name: '学生信息', path: '/student/stu-content',role:'student'},
                    {name: '考评记录', path: '/student/stu-score',role:'student'},
                    {name: '请假记录', path: '/student/stu-leave-list',role:'student'},
                    {name: '我的课程', path: '/student/stu-course-list',role:'student'},
                    /*老师*/
                    {name: '教师信息', path: '/teacher/tea-content',role:'teacher'},
                    {name: '学生请假审批', path: '/teacher/approval-leave',role:'teacher'},
                    {name: '我的班级', path: '/teacher/teacher-cls-list',role:'teacher'},
                    {name: '我的课程', path: '/teacher/teacher-course-list',role:'teacher'},
                    /*巡视老师*/
                    {name: '学生信誉记录考评', path: '/teacher/tea-score-list',role:'patrol teacher'},
                    {name: '巡视人员', path: '/patrol/patrol',role:'patrol teacher'},
                    /*管理员*/
                    {name: '管理员', path: '/admin/admin',role:'admin'},
                    {name: '用户管理', path: '/admin/user-list',role:'admin'},
                    {name: '班级管理', path: '/admin/cls-list',role:'admin'},
                    {name: '值列表管理', path: '/admin/lov-list',role:'admin'},
                    {name: '课程管理', path: '/admin/course',role:'admin'},
                    /*demo*/
                    // {name: 'http请求示例', path: '/demo/demo-http',},
                    // {name: '列表展示示例', path: '/demo/demo-table',},
                    {name: '测试', path: '/demo/demo-test',role:'all'},
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
                return this.totalMenus.filter(item => item.role === 'all' || item.role === this.userInfo.role)
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
        height: 100%;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            box-shadow: 0 0 6px #969696;
            top: 0;
            bottom: 0;
            right: 0;
            width: 1px;
        }
        .home-menu-wrapper {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            padding: 12px 0;
            position: relative;
            z-index: 1;
            background-color: white;
        }

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
