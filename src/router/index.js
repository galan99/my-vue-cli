import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/game'
    },
    {
      path: '/index',
      component: resolve => require(['@/pages/index.vue'], resolve)       // 首页
    },
    {
      path: '/game',
      component: resolve => require(['@/pages/game.vue'], resolve)       // 游戏
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = getCookie('username');
//   if (to.path === '/login') { // 如果是跳转到登录页的
//     next()
//   } else {
//     if (token !== 'null' && token !== null) {
//       next() // 如果有token就正常转向
//     } else {
//       next('/login') // 否则跳转回登录页
//     }
//   }
// })

export default router