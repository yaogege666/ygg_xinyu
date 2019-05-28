<template>
    <div class="app app-login" :style='{backgroundImage:`url("${loginBg}")`}'>
        <div class="app-login-logo">
            <img src="../asserts/school-logo.jpg" class="logo">
            <img :src="logoName" class="logo-name">
        </div>
        <div class="app-login-wrapper">
            <div class="app-login-form">
                <div class="app-login-switcher">登录</div>
                <div class="app-login-content">
                    <div>
                        <input type="text" placeholder="学号/工号" v-model="user.username" ref="username" @keyup.enter="login">
                        <input type="password" placeholder="密码" v-model="user.password" ref="password" @keyup.enter="login">
                    </div>
                    <div class="app-login-content-login-button" @click="login">登录</div>
                </div>
            </div>

   <!--         <div class="app-fast-login">
                <div class="app-fast-login-item" @click="fastLogin('T7365','289345')">老师</div>
                <div class="app-fast-login-item" @click="fastLogin('S8394','283745')">学生</div>
                <div class="app-fast-login-item" @click="fastLogin('P6273','394875')">巡视老师</div>
                <div class="app-fast-login-item" @click="fastLogin('admin','123456')">管理员</div>
            </div>-->
        </div>

    </div>
</template>

<script>

    import {getModuleStore} from "../util/store";

    const {mapMutations, mapGetters} = getModuleStore('user')

    export default {
        name: "login",
        data() {
            return {
                user: {
                    username: null,
                    password: null,
                },

                isLogin: true,
                logoName: require('src/asserts/logo.png'),
                loginBg: require('src/asserts/login-bg.jpg'),
            }
        },
        computed: {
            ...mapGetters(['userInfo']),
        },
        mounted() {
            if (!!this.userInfo && !!this.userInfo.username) {
                this.user.username = this.userInfo.username
                this.$refs.password.focus()
            } else {
                this.$refs.username.focus()
            }
        },
        methods: {
            ...mapMutations([
                'setUserInfo', 'setLoginTime'
            ]),
            async login() {
                if (!this.user.username) {
                    this.$message("用户名不能为空")
                    return
                }
                if (!this.user.password) {
                    this.$message("密码不能为空")
                    return
                }
                const data = await this.$http.post('user/login', this.user)
                if (data.code !== 0) {
                    this.$message(data.ret)
                }
                else {
                    this.setUserInfo(data.ret)
                    this.setLoginTime(new Date().getTime())
                    window.location.href = '/index.html'
                }
            },
            async fastLogin(username, password) {
                this.user.username = username
                this.user.password = password
                await  this.login()
            },
        }
    }
</script>

<style lang="scss">
    .app-login {
        user-select: none;
        .app-login-logo {
            float: left;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 50%;
            height: 100%;
            .logo {
                border-radius: 200px;
                width: 150px;
                height: 150px;
            }
            .logo-name {
                width: 300px;
                margin-top: 36px;
            }
        }
        .app-login-wrapper {
            width: 50%;
            float: right;
            height: 100%;
            background-color: rgba(black, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .app-login-form {
                height: 400px;
                width: 300px;
                border-radius: $border-radius;
                background-color: rgba(white, 0.3);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                .app-login-switcher {
                    width: 100%;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
                .app-login-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    padding: $padding-large;
                    box-sizing: border-box;
                    input {
                        width: 100%;
                        background-color: white;
                        border-radius: $border-radius;
                        outline: none;
                        border: none;
                        height: $height-normal;
                        line-height: $height-normal;
                        margin-bottom: $padding-large;
                        padding: 0 $padding;
                        box-sizing: border-box;
                    }

                    .app-login-content-login-button {
                        height: $height-large;
                        background-color: #4c8fc4;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        border-radius: $border-radius;
                        cursor: pointer;
                        &:active {
                            background-color: mix(black, #4c8fc4, 10%);
                        }
                    }

                }
            }
        }
        .app-fast-login {
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 20px;
            color: #4c74c4;
            background-color: rgba(white, 0.3);
            border-radius: $border-radius;
            margin-top: 12px;
            font-size: 12px;
            cursor: pointer;
        }
    }
</style>
