import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/work/:uid',
      name: 'SingleWork',
      component: () => import('./views/SingleWork.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    }
  ],
})

export default router
