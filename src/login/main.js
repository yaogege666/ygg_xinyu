import Vue from 'vue'
import login from './login'
import 'src/styles/index.scss'
import {Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from 'src/util/http'
import store from '../store'

Vue.prototype.$message = Message
Vue.prototype.$http = http

new Vue({
    store,
    render: h => h(login),
}).$mount('#app')