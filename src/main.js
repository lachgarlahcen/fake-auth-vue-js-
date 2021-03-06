import Vue from 'vue'
import App from './App.vue'
import '@/plugins/bootstrap';
import '@/plugins/zingcharts'
import store from '@/store'
import router from '@/router';
import axios from '@/plugins/axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
