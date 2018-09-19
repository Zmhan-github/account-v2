import Vue from 'vue';
import axios from 'axios';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VModal, { dialog: true });

Vue.prototype.$http = axios.create({
  baseURL: 'https://api.account.otau.org/v2',
});


new Vue({
  axios,
  router,
  render: h => h(App),
}).$mount('#app');
