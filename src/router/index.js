import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/device',
    name: 'device',
    component: () => import('../views/Device.vue')
  },
  {
    path: '/interface',
    name: 'interface',
    component: () => import('../views/Interface.vue')
  },
  {
    path: '/traffic',
    name: 'traffic',
    component: () => import('../views/Traffic.vue')
  },
  {
    path: '/network',
    name: 'network',
    component: () => import('../views/Network.vue')
  },
  {
    path: '/manageuser',
    name: 'manageuser',
    component: () => import('../views/Manageuser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
