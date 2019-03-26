// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import iView from 'iview';
import App from './App';
import router from './router';
import 'iview/dist/styles/iview.css';
import './assets/css/app.less';

Vue.config.productionTip = false;
Vue.use(VueAxios, Axios);
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
