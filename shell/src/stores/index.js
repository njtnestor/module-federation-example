// Exporta stores del Shell
import { createPinia, setActivePinia } from 'pinia';

let piniaInstance = null;

export const getPinia = () => {
  if (!piniaInstance) {
    piniaInstance = createPinia();
    setActivePinia(piniaInstance);
  }
  return piniaInstance;
};

export const setPinia = (pinia) => {
  piniaInstance = pinia;
  setActivePinia(pinia);
};

export { useConfigStore } from './configStore';
