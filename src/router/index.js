import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
// import Charts from '../views/Charts.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   const user = router.app.$store?.getters["auth/loggedUser"];
//   if(!user) {
//     if(to.name === 'Login' || to.name === 'Register') {
//       next();
//     }
//     else {
//       next({name: 'Login'});
//     }
//   } else {
//     if(to.name === 'Login' || to.name === 'Register') {
//       next({name: 'Home'});
//     } else {
//       next();
//     }
//   }
// })

export default router