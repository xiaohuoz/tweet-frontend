// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/font-awesome.min.css'
import VueHtml5Editor from 'vue-html5-editor'
import options from './vueHtmlEditor'
/* eslint-disable no-new */
Vue.use(ElementUI)

Vue.use(VueHtml5Editor, options)
new Vue({
  router
}).$mount('#app')
