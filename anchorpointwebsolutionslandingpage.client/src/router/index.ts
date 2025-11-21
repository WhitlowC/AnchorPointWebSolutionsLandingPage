import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServiceDetailPage from '../views/ServiceDetailPage.vue'
import WebDevelopmentService from '../views/services/WebDevelopmentService.vue'
import ExcelOptimizationService from '../views/services/ExcelOptimizationService.vue'
import MobileSolutionsService from '../views/services/MobileSolutionsService.vue'

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
      path: '/services/excel-optimization',
      name: 'excel-optimization',
      component: ExcelOptimizationService
    },
    {
      path: '/services/mobile-solutions',
      name: 'mobile-solutions',
      component: MobileSolutionsService
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
