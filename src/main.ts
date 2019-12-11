import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL =
  'https://3209fqkqqi.execute-api.us-east-1.amazonaws.com/prod';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
