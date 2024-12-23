import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IhrpRegistration from '@/components/viewComponents/ihrpCertifiedCommunity/registration/Registration.vue'
import IhrpIndividual from '@/components/viewComponents/ihrpCertifiedCommunity/registration/individual/Individual.vue'
import PartnersRegistration from '@/components/viewComponents/partners/registration/Registration.vue'
import PartnersIndividual from '@/components/viewComponents/partners/registration/individual/Individual.vue'
import PublicRegistration from '@/components/viewComponents/public/registration/Registration.vue'
import PublicIndividual from '@/components/viewComponents/public/registration/individual/Individual.vue'
import Uncertifiied_Friend from '@/components/viewComponents/ihrpCertifiedCommunity/registration/uncertifiied_friend/Uncertifiied_Friend.vue'
import Five_Passes from '@/components/viewComponents/ihrpCertifiedCommunity/registration/five_passes/Five_Passes.vue'
import Ten_Passes from '@/components/viewComponents/ihrpCertifiedCommunity/registration/ten_passes/Ten_Passes.vue'


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
      name: 'IhrpRegistration',
      component: IhrpRegistration,
    },
    {
      path: '/ihrp-certified-cummunity/registration/individual',
      name: 'IhrpIndividual',
      component: IhrpIndividual,
    },
    {
      path: '/partners/registration',
      name: 'PartnersRegistration',
      component: PartnersRegistration,
    },
    {
      path: '/partners/registration/individual',
      name: 'PartnersIndividual',
      component: PartnersIndividual,
    },
    {
      path: '/public/registration/',
      name: 'PublicRegistration',
      component: PublicRegistration,
    },
    {
      path: '/public/registration/individual',
      name: 'PublicIndividual',
      component: PublicIndividual,
    },
    {
      path: '/ihrp-certified-cummunity/registration/uncertified-friend',
      name: 'Uncertifiied_Friend',
      component: Uncertifiied_Friend,
    },
    {
      path: '/ihrp-certified-cummunity/registration/five-passes',
      name: 'Five_Passes',
      component:Five_Passes,
    },
    {
      path: '/ihrp-certified-cummunity/registration/ten-passes',
      name: 'Ten_Passes',
      component:Ten_Passes,
    }
  ],
})

export default router
