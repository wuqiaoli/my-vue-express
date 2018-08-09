import Vue from 'vue'
import Router from 'vue-router'
//导航栏
import menu from '@/views/nav/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/index',
      component:menu,
      redirect: '/index/index',
      children:[
          {
              path:'index',
              component: () => import('@/views/index/index')
          }
      ]
    },
    {
      path: '/map',
      component:menu,
      redirect: '/map/index',
      children:[
          {
              path:'index',
              component: () => import('@/views/amap/index')
          }
      ]
    },
    {
      path: '/tree',
      component:menu,
      redirect: '/tree/index',
      children:[
          {
              path:'index',
              component: () => import('@/views/tree/index')
          }
      ]
    }
  ]
})
