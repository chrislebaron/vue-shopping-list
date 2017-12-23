import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';
import round from 'vue-round-filter';

Vue.use(Router);

export default new Router({
    mode: 'history',
    filters: {
      round,
    },
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      }
    ]
})
