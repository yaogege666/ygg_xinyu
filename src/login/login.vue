<template>
    <div class="app app-login">
        <div class="app-login-logo">
            <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1977194884,2248255532&fm=58&bpow=823&bpoh=823" class="logo">
            <img :src="logoName" class="logo-name">
        </div>
        <div class="app-login-wrapper">
            <div class="app-login-form">
                <div class="app-login-switcher">登录</div>
                <div class="app-login-content">
                    <div>
                        <input type="text" placeholder="学号/工号" v-model="user.username">
                        <input type="password" placeholder="密码" v-model="user.password">
                    </div>
                    <div class="app-login-content-login-button" @click="login">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                user: {
                    username: null,
                    password: null,
                },

                isLogin: true,
                logoName: require('src/asserts/logo.png')
            }
        },
        methods: {
            login() {
                window.location.href = '/index.html'
            },
        }
    }
</script>

<style lang="scss">
    .app-login {
        background-image: url("http://demo.cssmoban.com/cssthemes4/azds_registration-forms/form-1/assets/img/backgrounds/1@2x.jpg");
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
    }
</style>
