import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from '@/components/viewComponents/home/IHRP_Certified_Community/registration/Registration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ihrp-certified-cummunity/registration',
      name: 'Registration',
      component: Registration,
    }
  ],
})

export default router
