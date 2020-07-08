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
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Wallets.vue')
  },
  {
    path: '/wallets/deposit/:coin',
    name: 'WalletsDeposit',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/WalletsDeposit.vue')
  },
  {
    path: '/wallets/withdraw/:coin',
    name: 'WalletsWithdraw',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/WalletsWithdraw.vue')
  },
  {
    path: '/exchange/:coin',
    name: 'ExchangeCoin',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Exchange.vue')
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Exchange.vue')
  },
  {
    path: '/funds',
    name: 'Funds',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Funds.vue')
  },
  {
    path: '/history/:coin',
    name: 'HistoryCoin',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/History.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/History.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta : { layout : 'auth' },
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta : { layout : 'auth' },
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Register.vue')
  },
  {
    path: '/reset-password',
    name: 'Forgot Password',
    meta : { layout : 'auth' },
    component: () => import(/* webpackChunkName: "wallets" */ '../views/Password.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
