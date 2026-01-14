import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Root from './Root.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./App.vue')
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: () => import('./views/HelloWorld.vue')
  },
  // También soportar la ruta /remote/hello para consistencia con el shell
  {
    path: '/remote/hello',
    name: 'RemoteHello',
    component: () => import('./views/HelloWorld.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(Root);
app.use(createPinia());
app.use(router);
app.mount('#app');
