import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('../views/login/login.vue')), 'login')
const register = r => require.ensure([], () => r(require('../views/register/register.vue')), 'login')
const home = r => require.ensure([], () => r(require('../views/home/index.vue')), 'home')

Vue.use(Router)

const routes = [
  {path: '/', component: home},
  {path: '/login', component: login},
  {path: '/register', component: register},
  {path: '/home', component: home}
]
const router = new Router({
  routes
})

export default router
