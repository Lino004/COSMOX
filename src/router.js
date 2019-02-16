import Vue from 'vue'
import Router from 'vue-router'
import Loading from './views/Loading.vue'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'loading',
      component: Loading
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }

  ]
})
