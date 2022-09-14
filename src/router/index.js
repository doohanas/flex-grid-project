import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../layouts/MainPage.vue'),
  },
  {
    path: '/dashboard-example',
    name: 'dashboard example',
    component: () => import('../views/DashboardExample.vue'),
  },
  {
    path: '/case1',
    name: 'case-one',
    component: () => import('../views/CaseOne.vue'),
  },
  {
    path: '/case2',
    name: 'case-two',
    component: () => import('../views/CaseTwo.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
