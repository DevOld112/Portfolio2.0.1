import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../../src/views/About/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../../src/views/Contact/ContactView.vue')
    }

  ]
})

export default router
