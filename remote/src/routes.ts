import type { RouteRecordRaw } from 'vue-router';

// Rutas del remote que serán consumidas por el shell
export const remoteRoutes: RouteRecordRaw[] = [
  {
    path: '/remote/hello',
    name: 'RemoteHello',
    component: () => import('./views/HelloWorld.vue')
  }
];

export default remoteRoutes;
