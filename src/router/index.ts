import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/campgrounds',
    name: 'campgrounds',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Campgrounds.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NewCampground.vue'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EditCampground.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Verify.vue'),
  },
  {
    path: '/campground/:id',
    name: 'show',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Show.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
