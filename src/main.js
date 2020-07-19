import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, email, confirmed } from 'vee-validate/dist/rules';
import VueContentLoading from 'vue-content-loading';
import en from 'vee-validate/dist/locale/en.json';

localize({ en })
extend('email', email);
extend('required', required);
extend('confirmed', confirmed);

import CoinAlert from '@/components/CoinAlert'
import SportPanel from '@/components/SportPanel'

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('CoinAlert', CoinAlert)
Vue.component('SportPanel', SportPanel)
Vue.component('VueContentLoading', VueContentLoading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
