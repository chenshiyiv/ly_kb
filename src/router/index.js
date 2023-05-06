import { createRouter, createWebHashHistory } from 'vue-router'
import notFound from '@/views/404'


const routes = [
  {
    path: '/',
    name: "index",
    redirect: '/repertory',
    component: () => import('@/views/board/index.vue'),
  },
  // 库存
  {
    path: '/repertory',
    name: "repertory",
    component: () => import('@/views/board/repertory.vue'),
  },
  {
    // 轧钢
    path: '/steelrollingquality',
    name: "steelrollingquality",
    component: () => import('@/views/board/steelrollingquality.vue'),
  },
  {
    // 炼钢
    path: '/steelmakingquality',
    name: "steelmakingquality",
    component: () => import('@/views/board/steelmakingquality.vue'),
  },
  // 生产
  {
    path: '/manufacture',
    name: "manufacture",
    component: () => import('@/views/board/manufacture.vue'),
  },

  // 404
  { path: '/:pathMatch(.*)*', name: 'not-found', component: notFound }
]




const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     // 去其他页面的时候需要token
//     // 先获取token
//     const token = localStorage.getItem('token')
//     if (!token) {
//       // 判断token为空的时候，没有权限，强制跳转到登录页面
//       next('/login')
//     } else {
//       // 有token,直接放行
//       next()
//     }
//   }
// })

router.afterEach((to) => {
  if (!window.sessionStorage.firstUrl) {
    window.sessionStorage.firstUrl = to.fullPath;
  }
})

export default router
