// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase';
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire';
import ex from './store/ex'

Vue.config.productionTip = false

Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  ex: ex,
  template: '<App/>',
  components: { App }
})
