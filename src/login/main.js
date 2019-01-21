import Vue from 'vue'
import login from './login'
import 'src/styles/index.scss'

new Vue({
    render: h => h(login),
}).$mount('#app')