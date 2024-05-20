import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    
    {   
      path: '/dogs',
      name: 'dogs',
      component: () => import('../views/DogsView.vue')
    },
    {
      path: '/dogs/:breed', 
      name: 'dogsDetail',
      component: () => import('../views/DogsDetailsView.vue')
    },
  ]
})

export default router
