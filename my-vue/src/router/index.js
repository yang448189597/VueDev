import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '../components/TodoList'
import RequestData from '../components/RequestData'
import Home from '../components/Home'
import VueEmit from '../components/VueEmit.vue'
import TwoWayBindModel from '../components/TwoWayBindModel'
import VueBaseTest from '../components/VueBaseTest'
import NewsDemo from '../components/NewsDemo'
import Content from '../components/Content'
import ProductContent from '../components/ProductContent'
import User from '../components/User'
import UserAdd from '../components/User/UserAdd'
import UserList from '../components/User/UserList'
import VuexDemo from '../components/VuexDemo'
import VuexNews from '../components/VuexTest/VuexNews'
import VuexHome from '../components/VuexTest/VuexHome'
import ElementTable from '../components/Demo_two/ElementTable'

Vue.use(Router)

export default new Router({
  routes: [
    // 设置默认跳转的路由 redirect
    {
      path: '*',
      redirect: '/HelloWorld'
    },

    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/ElementTable',
      name: 'ElementTable',
      component: ElementTable
    },

    // 配置子路由
    {
      path: '/User',
      name: 'User',
      component: User,
      children: [
        {
          path: 'adduser',
          component: UserAdd
        },

        {
          path: 'userlist',
          component: UserList
        }

      ]
    },

    // 配置子路由
    {
      path: '/VuexTest',
      name: 'VuexDemo',
      component: VuexDemo,
      children: [
        {
          path: 'vuexhome',
          component: VuexHome
        },

        {
          path: 'vuexnews',
          component: VuexNews
        }

      ]
    },

    {
      path: '/NewsDemo',
      name: 'NewsDemo',
      component: NewsDemo
    },

    {
      // 动态路由
      path: '/content/:aid',
      name: 'Content',
      component: Content
    },

    {
      // get传值
      path: '/pcontent',
      name: 'ProductContent',
      component: ProductContent
    },

    {
      path: '/VueBaseTest',
      name: 'VueBaseTest',
      component: VueBaseTest
    },

    {
      path: '/Home',
      name: 'Home',
      component: Home
    },

    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },

    {
      path: '/RequestData',
      name: 'RequestData',
      component: RequestData
    },

    {
      path: '/VueEmit',
      name: 'VueEmit',
      component: VueEmit
    },

    {
      path: '/TwoWayBindModel',
      name: 'TwoWayBindModel',
      component: TwoWayBindModel
    }
  ]
})
// import Vue from 'vue' // 导入Vue
// import Router from 'vue-router' // 导入vue-router 库
// import Layout from '../components/Demo_one/Layout' // 导入layouts.vue 组件

// Vue.use(Router)

// export default new Router({ // 创建 router 实例，然后传 `routes` 配置
//   routes: [
//     {
//       path: '/',
//       name: 'Layout', // 路径名
//       component: Layout
//     }
//   ]
// })
