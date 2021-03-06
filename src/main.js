// 生产环境中注释掉以下语句
import '../mock/index.js'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './utils/ajax'
import 'babel-polyfill'

//引入elementui插件
import './plugins/elementui.js'

//引入iconfont
import '@/assets/style/iconfont/iconfont.css'

//引入lodash语法便于操作数据
import _ from 'lodash'
Vue.prototype._ = _
    //阻止vue在启动时生成生产提示
Vue.config.productionTip = false
    //挂载axios
Vue.prototype.$axios = axios

new Vue({
    router,
    axios,
    render: h => h(App)
}).$mount('#app')