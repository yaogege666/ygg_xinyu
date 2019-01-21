<template>
    <div class="home-header">
        <span class="title">学生信誉考评系统</span>
        <div class="home-operator">
            <div class="user-name">
                欢迎！{{!!userInfo && userInfo.name}}
            </div>
            <el-badge :value="12" class="clock" type="warning">
                <y-icon icon="icon-iconset0218"/>
            </el-badge>

            <el-badge :value="10" class="envelope">
                <y-icon icon="icon-envelope"/>
            </el-badge>

            <el-button type="text" class="logout" @click="logout">
                注销&nbsp;
                <y-icon icon="icon-logout"/>
            </el-button>
        </div>
    </div>
</template>

<script>

    import {getModuleStore} from "../../util/store";

    const {mapGetters, mapMutations} = getModuleStore('user')

    export default {
        name: "home-header",
        methods: {
            ...mapMutations([
                'setUserInfo', 'setLoginTime'
            ]),
            logout() {
                const userInfo = Object.assign({}, this.userInfo)
                userInfo.password = null
                this.setUserInfo(userInfo)
                this.setLoginTime(null)
                window.location.href = '/login.html'
            },

        },
        computed: {
            ...mapGetters(['userInfo']),
        },
    }
</script>

<style lang="scss">
    .home-header {
        height: 64px;
        background-color: #6BB8B8;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        .title {
            font-size: 24px;
            letter-spacing: 6px;
        }
        .home-operator {
            display: flex;
            align-items: center;
            .el-button {
                font-size: 16px;
            }

            .user-name {
                margin-right: $padding-large;
            }
        }
        .envelope {
            margin-right: 30px;
            font-size: 24px;
        }
        .clock {
            margin-right: 40px;
            font-size: 24px;
        }
        .logout {
            color: white;
        }
    }
</style>
