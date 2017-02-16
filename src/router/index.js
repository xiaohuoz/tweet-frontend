import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Auth from 'components/Auth'
import App from 'layout/mainlayout/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [{
        path: '',
        component: Hello
      }, {
        path: 'Hello',
        component: Hello
      }]
    }, {
      path: '/auth',
      name: 'auth',
      component: Auth
    }]
})
