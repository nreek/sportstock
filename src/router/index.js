import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/wallets',
    name: 'Wallets',
    component: () => import('../views/Wallets.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/wallets/withdraw/:coin',
    name: 'WalletsWithdraw',
    component: () => import('../views/WalletsWithdraw.vue')
  },
  {
    path: '/wallets/deposit/:coin',
    name: 'WalletsDeposit',
    component: () => import('../views/WalletsDeposit.vue')
  },
  {
    path: '/market-cap',
    name: 'Market Cap',
    component: () => import('../views/MarketCap.vue')
  },
  {
    path: '/history/:coin',
    name: 'HistoryCoin',
    component: () => import('../views/History.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta : { layout : 'auth' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta : { layout : 'auth' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/reset-password',
    name: 'Forgot Password',
    meta : { layout : 'auth' },
    component: () => import('../views/Password.vue')
  },
  {
    path: '/trade',
    name: 'Trade',
    meta : { layout : 'trade' },
    component: () => import('../views/Trade.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
