/*
 * @Descripttion:
 * @version:
 * @Author: DuShaoDa
 * @Date: 2020-11-12 15:21:22
 * @LastEditors: DuShaoDa
 * @LastEditTime: 2020-11-13 09:00:11
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
