import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Whales from './components/whales/Whales.vue';
import WhaleDetail from './components/whales/WhaleDetail.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/whales', component: Whales },
    { path: '/whales/:id', component: WhaleDetail },
    { path: '*', redirect: '/' }
  ]
});