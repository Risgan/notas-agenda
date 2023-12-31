import { createRouter, createWebHistory } from 'vue-router'
import CalendarioView from '../views/CalendarioView.vue'
import ListaView from '../views/ListaView.vue'

const routes = [
  {
    path: '/',
    name: 'calendario',
    component: CalendarioView
  },  
  {
    path: '/lista',
    name: 'lista',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
