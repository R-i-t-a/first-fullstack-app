import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Whales from './components/whales/Whales.vue';
import AddWhale from './components/whales/AddWhale.vue';
import Whale from './components/whales/Whale.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/whales', component: Whales },
    { path: '/whales/add', component: AddWhale },
    { path: '/whales/:id', component: Whale },
    { path: '*', redirect: '/' }
  ]
});