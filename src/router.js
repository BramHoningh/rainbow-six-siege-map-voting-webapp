import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Room from './views/Room.vue';
import PickBan from './views/PickBan.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/room',
      name: 'room',
      component: Room
    },
    {
      path: '/pick-ban',
      name: 'pickBan',
      component: PickBan
    }
  ],
});
