import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PathErrorView from '../views/PathErrorView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Repos',
      name: 'Repos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RepoView.vue')
    },
    {
      path: '/FourOfour',
      name: 'FourOfour',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PathErrorView
    },
    {
      path: '/Repos/:username/:id',
      name: 'RepoDetails',
      component: () => import('../views/singleRepoDetails.vue'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'FourOfour',
      component: PathErrorView
    },

  ]
})

export default router
