import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/login.vue'
import register from '../views/register/register.vue'
import index from '../views/home/index.vue'
Vue.use(Router)
const routes = [
  {path: '/', component: login},
  {path: '/login', component: login},
  {path: '/register', component: register},
  {path: '/home/index', component: index}
]
const router = new Router({
  routes
})
export default router
