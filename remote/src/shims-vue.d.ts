/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Declaración para Module Federation - Shell stores
declare module 'shell/stores' {
  export const useConfigStore: typeof import('./stores/fallbackStore').useConfigStore;
}
