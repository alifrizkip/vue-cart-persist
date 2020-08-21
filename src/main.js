import Vue from 'vue'
import Base from './layouts/Base.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(Base)
}).$mount('#app')
