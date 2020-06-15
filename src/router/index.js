import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Child from '../views/Child.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/child',
    name: 'Child',
    component: Child
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
