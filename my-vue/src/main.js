// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* 引入css的样式 */
import './assets/css/basic.css'

import Mock from './mock' // 引入mock模块
Mock.start() // 并且执行初始化函数

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
