import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/view/Index';
import Secondary from '@/view/Secondary';

Vue.use(Router);

export default new Router({
  mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/secondary',
      name: 'Secondary',
      component: Secondary
    }
  ],
});
