import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Cv from '../views/Cv.vue';
import Lettre from '../views/Lettre.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/cv',
      name: 'cv',
      component: Cv
    },

    {
      path: '/lettre',
      name: 'lettre',
      component: Lettre
    
    }
   


  ]
})

export default router
