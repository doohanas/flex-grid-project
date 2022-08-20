import Vue from 'vue';
import App from './App.vue';
import axios from './plugins/axios';
import './index.css';

Vue.config.productionTip = false;

new Vue({
  axios,
  render: (h) => h(App),
}).$mount('#app');
