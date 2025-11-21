import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServiceDetailPage from '../views/ServiceDetailPage.vue'
import WebDevelopmentService from '../views/services/WebDevelopmentService.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/services/web-development',
      name: 'web-development',
      component: WebDevelopmentService
    },
    {
      path: '/services/:serviceId',
      name: 'service-detail',
      component: ServiceDetailPage,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
