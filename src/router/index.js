import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Profile from '@/pages/Profile.vue';
import store from '@/store' 

const notAuthenticated = (to, from, next) => {
  if (!store.getters['auth/token']) {
    next()
    return
  }
  next('/')
}

const authenticated = (to, from, next) => {
  if (store.getters['auth/token']) {
    next()
    return
  }
  next('/login')
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: authenticated,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: notAuthenticated,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: notAuthenticated,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: authenticated,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})



export default router