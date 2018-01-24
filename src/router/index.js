/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login.vue'
import Home from '../components/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
