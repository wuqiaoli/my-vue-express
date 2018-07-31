import Vue from 'vue'
import Router from 'vue-router'
//导航栏
import menu from '@/views/nav/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component:menu,
      redirect: '/login/index',
      children:[
          {
              path:'index',
              component: () => import('@/views/login/index')
          }
      ]
    }
  ]
})
