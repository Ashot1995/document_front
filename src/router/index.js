import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout/Home.vue'
import Account from '../layout/Account'
import AntiPiracyFileSelection from '../layout/AntiPiracyFileSelection'
import AntiPiracyResult from '../layout/AntiPiracyResult'
import Documents from '../layout/Documents'
import Integration from '../layout/Integration'
import SubscriptionsManagement from '../layout/SubscriptionsManagement'
import SignUp from "../layout/SignUp";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/account',
    component: Account,
    meta: { requiresAuth: true },
  },
  {
    path: '/ap-file-selection',
    meta: { requiresAuth: true },
    component: AntiPiracyFileSelection
  },
  {
    path: '/ap-result',
    meta: { requiresAuth: true },
    component: AntiPiracyResult
  },
  {
    path: '/documents',
    meta: { requiresAuth: true },
    component: Documents
  },
  {
    path: '/subscriptions-management',
    meta: { requiresAuth: true },
    component: SubscriptionsManagement
  },
  {
    path: '/integration',
    meta: { requiresAuth: true },
    component: Integration
  },
  {
    path: '/signup',
    component: SignUp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const match = document.cookie.match(new RegExp('(^| )' + '_token' + '=([^;]+)'))
  currentUser = match ? match[0].trim().slice(7, match[0].trim().length) : null
  if (!currentUser && requiresAuth) {
    next('/signup')
  } else {
    next()
  }
});

export default router
