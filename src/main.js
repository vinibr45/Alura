import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes'
import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({routes,
mode:'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
