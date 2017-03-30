import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
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
