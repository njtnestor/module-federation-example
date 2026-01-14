// Store de configuración del Shell - compartido con remotes via Module Federation
import { defineStore, getActivePinia, setActivePinia, createPinia } from 'pinia';

type Theme = 'light' | 'dark';

interface ConfigState {
  theme: Theme;
}

const configStoreDefinition = defineStore('config', {
  state: (): ConfigState => ({
    theme: 'light'
  }),
  
  getters: {
    isDark: (state): boolean => state.theme === 'dark'
  },
  
  actions: {
    setTheme(theme: Theme): void {
      this.theme = theme;
    },
    
    toggleTheme(): void {
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

export type { Theme, ConfigState };
