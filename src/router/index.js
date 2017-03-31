import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login/login.vue'
import register from '../views/register/register.vue'
Vue.use(Router)
const routes = [
  {path: '/', component: login},
  {path: '/login', component: login},
  {path: '/register', component: register}
]
const router = new Router({
  routes
})
export default router
