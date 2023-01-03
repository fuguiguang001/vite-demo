//引入路由对象
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

// 路由数组的类型 RouteRecordRaw
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('../view/login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//导出router
export default router;
