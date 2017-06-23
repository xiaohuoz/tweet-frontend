import Vue from 'vue'
import Router from 'vue-router'
import App from 'layout/mainlayout/App'
import Auth from 'components/Auth'
import Home from 'components/Home'
import Tweets from 'components/Tweets'
import Blogs from 'components/Blogs'
import SSETest from 'components/SSETest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [{
        path: '',
        component: Home
      }, {
        path: 'tweets',
        component: Tweets
      }, {
        path: 'blogs',
        component: Blogs
      }]
    }, {
      path: '/auth',
      name: 'auth',
      component: Auth
    }, {
      path: '/sse',
      name: 'sse',
      component: SSETest
    }]
})
