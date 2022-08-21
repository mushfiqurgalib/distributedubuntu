import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Status from '../components/Status.vue'
import AddStatus from '../components/CreateStatus.vue'
import Addstory from '../components/CreateStory.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Status',
  
    component: Status
  },
  {
    path: '/AddStatus',
  
    component: AddStatus
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/register',
   
    component:Register
  },
  {
    path:'/addstory',
   
    component:Addstory
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
