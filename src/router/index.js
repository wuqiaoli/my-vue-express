import Vue from 'vue'
import Router from 'vue-router'
//导航栏
import menu from '@/views/nav/index'
Vue.use(Router)
//公共路由
export const publicRouter = [
    {path: '/login',name:'登录',component: () => import('@/views/login/index')},
    {
      path: '/index',
      component:menu,
      redirect: '/index/index',
      name:'首页',
      children:[
          {
              path:'index',
              name:'首页',
              component: () => import('@/views/index/index')
          }
      ]
    },
    {
      path: '/map',
      component:menu,
      redirect: '/map/index',
      name:'地图',
      children:[
          {
              path:'index',
              name:'地图',
              component: () => import('@/views/amap/index')
          }
      ]
    },
    {
      path: '/tree',
      component:menu,
      redirect: '/tree/index',
      name:'树形结构',
      children:[
          {
              path:'index',
              name:'树形结构',
              component: () => import('@/views/tree/index')
          }
      ]
    },
    {
      path: '/vuexa',
      component:menu,
      redirect: '/vuexa/index',
      name:'vuex',
      children:[
          {
              path:'index',
              name:'vuex',
              component: () => import('@/views/vuexa/index')
          },
          {
              path:'router',
              name:'路由',
              component: () => import('@/views/vuexa/router')
          }
      ]
    },
    {
      path: '/errorLog',
      component:menu,
      redirect: '/errorLog/index',
      name:'404',
      children:[
          {
              path:'index',
              name:'404',
              component: () => import('@/views/errorLog/index')
          }
      ]
    },
    {
      path: '/animation',
      component:menu,
      redirect: '/animation/index',
      name:'animation',
      children:[
          {
              path:'index',
              name:'animation',
              component: () => import('@/views/animation/index')
          }
      ]
    },
    {
      path: '/animate',
      component:menu,
      redirect: '/animate/index',
      name:'animate',
      children:[
          {
              path:'index',
              name:'animate',
              component: () => import('@/views/animate/index')
          }
      ]
    },
     {
      path: '/sanck',
      component:menu,
      redirect: '/sanck/index',
      name:'sanck',
      children:[
          {
              path:'index',
              name:'sanck',
              component: () => import('@/views/sanck/index')
          }
      ]
    },
]




export default new Router({
  routes: publicRouter
})
