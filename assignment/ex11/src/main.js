import Vue from 'vue';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';
import store from './store';

import './scss/vendor.scss';
import './scss/main.scss';

Vue.config.productionTip = false;

Vue.filter('appendCount', value => `${value} (${value.length})`);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
