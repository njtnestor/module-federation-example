/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Declaración para Module Federation remotes
declare module 'remoteApp/RemoteComponent' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'remoteApp/routes' {
  import type { RouteRecordRaw } from 'vue-router';
  export const remoteRoutes: RouteRecordRaw[];
  export default remoteRoutes;
}
