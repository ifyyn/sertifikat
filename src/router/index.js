import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Certifikat from '../views/Certifikat.vue'
import DetailCertifikat from '../views/DetailCertifikat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sertifikat',
      name: 'sertifikat',
      component:Certifikat
    },
    {
      path:'/sertifikat/:id',
      name:'certifikat',
      component:DetailCertifikat
      
    }
  ]
})

export default router
