import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import Update from '../views/Update.vue';
import Team from '../views/Team.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/update',
    name: 'Update',
    component: Update,
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
