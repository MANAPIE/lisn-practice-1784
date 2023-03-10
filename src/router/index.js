import { createRouter, createWebHistory } from 'vue-router'

import Blank from '@/components/Blank'
import Index from '@/components/Index'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      layout: 'empty'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Blank,
    meta: {
      layout: 'empty'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
