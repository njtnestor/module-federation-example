import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';

type Theme = 'light' | 'dark';

// Store de fallback para cuando el remote corre en modo standalone
export const useConfigStore = defineStore('config', () => {
  const theme: Ref<Theme> = ref('light');

  const toggleTheme = (): void => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  return {
    theme,
    toggleTheme
  };
});

export type { Theme };
