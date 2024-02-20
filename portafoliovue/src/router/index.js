import { createRouter, createWebHistory } from 'vue-router';
import  HomePage  from '../views/HomePage.vue';
import WorkPage from '../views/WorkPage.vue';
import ContactPage from '../views/ContactPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkPage,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
    }

  ]
})

export default router
