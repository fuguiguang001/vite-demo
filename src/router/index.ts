//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

 
// 路由数组的类型 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [{
    path: '/login',
    component: () => import('../view/login.vue')
}]
 
 
 
const router = createRouter({
    history: createWebHistory(),
    routes
})
 
//导出router
export default router