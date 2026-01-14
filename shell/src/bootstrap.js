import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia, setActivePinia } from 'pinia';
import App from './App.vue';
import { setPinia } from './stores';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue')
  },
  {
    path: '/remote',
    name: 'Remote',
    component: () => import('./views/RemoteView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const pinia = createPinia();
setActivePinia(pinia);
setPinia(pinia);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
