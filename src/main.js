import Vue from 'vue';
import App from './App.vue';
import axios from './plugins/axios';
import './index.css';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  axios,
  router,
  render: (h) => h(App),
}).$mount('#app');
