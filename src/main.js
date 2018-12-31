import Vue from 'vue'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);


import VueRouter from 'vue-router'
Vue.use(VueRouter);
import {routes} from './routes.js';
const rutas = new VueRouter({
      routes: routes
});

import {store} from './store.js';



import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vSelect from 'vue-select'
Vue.component('v-select', vSelect);

new Vue({
  el: '#app',
  router: rutas,
  store,
  render: h => h(App)
})
