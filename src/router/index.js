import Vue from 'vue'
import VueRouter from 'vue-router'
import Wallets from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Wallets
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
  // {
  //   path: '/wallets/deposit/:coin',
  //   name: 'WalletsDeposit',
  //   component: () => import('../views/WalletsDeposit.vue')
  // },
  {
    path: '/wallets/withdraw/:coin',
    name: 'WalletsWithdraw',
    component: () => import('../views/WalletsWithdraw.vue')
  },
  {
    path: '/exchange/:coin',
    name: 'ExchangeCoin',
    component: () => import('../views/Exchange.vue')
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: () => import('../views/Exchange.vue')
  },
  {
    path: '/funds',
    name: 'Funds',
    component: () => import('../views/Funds.vue')
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
]

const router = new VueRouter({
  routes
})

export default router
