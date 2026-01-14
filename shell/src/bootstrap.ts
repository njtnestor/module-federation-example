import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { createPinia, setActivePinia } from 'pinia';
import App from './App.vue';
import { setPinia } from './stores';

const routes: RouteRecordRaw[] = [
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

// Cargar rutas del remote dinámicamente
async function loadRemoteRoutes() {
  try {
    const remoteRoutes = await import('remoteApp/routes');
    const routesToAdd = remoteRoutes.remoteRoutes || remoteRoutes.default || [];
    
    routesToAdd.forEach((route: RouteRecordRaw) => {
      router.addRoute(route);
    });
    
    console.log('Remote routes loaded:', routesToAdd.map((r: RouteRecordRaw) => r.path));
  } catch (error) {
    console.warn('Could not load remote routes:', error);
  }
}

const pinia = createPinia();
setActivePinia(pinia);
setPinia(pinia);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');

// Cargar rutas del remote después de montar la app
loadRemoteRoutes();
