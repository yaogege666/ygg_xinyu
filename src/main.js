import Vue from 'vue'
import App from './App'
import 'src/styles/index.scss'
import $utils from 'src/util/utils'
import components from 'src/components/index'

console.log('components', components)

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element, {size: 'small', zIndex: 3000});

Object.keys(components).forEach(key => {
    Vue.component('y-' + $utils.getKebabCase(key), components[key])
})

Vue.prototype.$lv = {
    $utils
}

Vue.config.productionTip = false

$utils.addScript("https://at.alicdn.com/t/font_1012025_ea0fg69c24p.js")

new Vue({
    render: h => h(App),
}).$mount('#app')
