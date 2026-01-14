import { defineStore } from 'pinia';
import { ref } from 'vue';

// Store de fallback para cuando el remote corre en modo standalone
export const useConfigStore = defineStore('config', () => {
  const theme = ref('light');

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  return {
    theme,
    toggleTheme
  };
});
