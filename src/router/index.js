import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import Update from '../views/Update.vue';
import Team from '../views/Team.vue';
import CarListTest from '../views/CarListTest.vue';
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
    path: '/update/:id',
    name: 'Update',
    component: Update,
  },
  {
    path: '/test/list',
    name: 'TestList',
    component: CarListTest,
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
