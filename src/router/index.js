import { createRouter, createWebHashHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';
import Holidayspage from '../views/Holidayspage.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/holidays',
    name: 'Holidayspage',
    component: Holidayspage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
