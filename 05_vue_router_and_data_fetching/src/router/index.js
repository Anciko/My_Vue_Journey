import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetailView from '../views/jobs/JobsDetailView.vue'
import NotFound from '../views/jobs/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/jobs/:id',
      name: 'jobsdetails',
      component: JobsDetailView,
      props: true
    },

    // route redires
    {
      path: '/jobs/'
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/alljobs', redirect: {name: 'jobs'} }
  ]
})

export default router
