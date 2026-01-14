// Store de configuración del Shell - compartido con remotes via Module Federation
import { defineStore, getActivePinia, setActivePinia, createPinia } from 'pinia';

const configStoreDefinition = defineStore('config', {
  state: () => ({
    theme: 'light'
  }),
  
  getters: {
    isDark: (state) => state.theme === 'dark'
  },
  
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
    
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
});

export const useConfigStore = () => {
  // Asegurar que Pinia está activo (para cuando el remote lo llama)
  if (!getActivePinia()) {
    const pinia = createPinia();
    setActivePinia(pinia);
  }
  return configStoreDefinition();
};
