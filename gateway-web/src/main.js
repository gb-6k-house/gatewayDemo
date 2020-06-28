import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$http = axios


axios.interceptors.request.use(function (config) {
  if(config.headers['host-type'] == null) {
		config.headers['host-type'] = 'ruby'
	}
  return config;
}, function (error) {
  return Promise.reject(error);
});
new Vue({
  render: h => h(App),
}).$mount('#app')
