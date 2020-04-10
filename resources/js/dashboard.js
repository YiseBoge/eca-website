import Vue from 'vue'
import vuetify from '~/plugins/vuetify'
import '~/plugins/base'
import Dashboard from '~/Dashboard.vue'
import {router} from '~/routes/admin-router'
import {store} from '~/store/store'
import moment from "moment";


Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    htmlToText(htmlString) {
      let p = document.createElement('p');
      p.innerHTML = htmlString.trim();
      return p.innerText
    },
    formatToDate(date) {
      return moment(date).format('MMM Do, YYYY')
    },
    formatToMinute(date) {
      return moment(date).format('h:mm A, MMM DD YYYY')
    },
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(Dashboard)
}).$mount('#app');
