import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import '~/plugins/base'
import Dashboard from '~/admin-dashboard/Dashboard.vue'
import {router} from '~/routes/admin-router'
import {store} from '~/store/store'


Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(Dashboard)
}).$mount('#app');
