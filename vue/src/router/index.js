import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/LoginView";
import IndexView from "@/views/IndexView";
import Left_container from "@/components/Left_container";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView
  },

]

const router = new VueRouter({
  routes
})

export default router
