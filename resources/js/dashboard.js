import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import '~/plugins/base'
import Dashboard from '~/admin-dashboard/Dashboard.vue'
import {adminRoute} from '~/router'
import {store} from '~/store/store'


Vue.config.productionTip = false;

new Vue({
  vuetify,
  router: adminRoute,
  store,
  render: h => h(Dashboard)
}).$mount('#app');
