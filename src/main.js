import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import 'src/styles/index.scss'
import $utils from 'src/util/utils'
import components from 'src/components/index'

Vue.config.productionTip = false
/*安装ElementUI*/
Vue.use(Element, {size: 'small', zIndex: 3000});
Vue.use(VueRouter)
const router = new VueRouter({routes: []})

/*全局注册组件*/
Object.keys(components).forEach(key => Vue.component('y-' + $utils.getKebabCase(key), components[key]))

/*设置全局对象$lv*/
Vue.prototype.$lv = {
    $router: router,
    $utils,

    /*
     *  路由跳转
     *  @author     martsforever
     *  @datetime   2019/1/13 21:04
     *  @param      path    跳转的地址，示例：/teacher/teac_detail
     *  @param      query   跳转参数，获取参数方法，在组件中：this.$route.query
     */
    push(path, query) {
        /*路由跳转*/
        const next = () => this.$router.push({path, query})
        if (this.$router.options.routes.some(route => route.name === path)) {
            next()
        } else {
            /*页面分开打包，按需加载，只打包以page结尾的.vue文件，不以page结尾的表示页面公共的组件，分开打包，按需引入*/
            import('src/page' + path + '.vue').then(module => {
                const route = {name: path, path: path, component: module.default}
                /*添加路由信息*/
                this.$router.options.routes.push(route)
                this.$router.addRoutes([route])
                next()
            })
        }
    },
    /*
     *  路由回退
     *  @author     martsforever
     *  @datetime   2019/1/13 21:06
     */
    back() {
        window.history.back()
    }
}
$utils.addScript("https://at.alicdn.com/t/font_1012025_03yn5t2nyly2.js")

new Vue({
    router,
    render: h => h(App),
    beforeCreate() {
        if (this.$route.path !== '/') {
            this.$lv.push(this.$route.path)
        }
    },
}).$mount('#app')
