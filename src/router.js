import Vue from 'vue';
import Router from 'vue-router';


import Login from './login/Login.vue';
import Signin from './login/Signin.vue';
import Register from './login/Register.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Login,
      children: [
        {
          path: '/',
          name: 'signin',
          component: Signin,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        },
      ],
    },
    // {
    //   path: '/register',
    //   component: Register,
    //   name: 'register',
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
