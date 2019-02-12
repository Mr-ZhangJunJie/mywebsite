import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/fortune',
      children: [
        {
          path:'fortune',
          component: resolve => require(['@/components/Fortune'],resolve).default
        },
        {
          path:'pagepc',
          component: resolve => require(['@/components/Pagepc'],resolve).default
        }
      ]
    }
  ]
})
