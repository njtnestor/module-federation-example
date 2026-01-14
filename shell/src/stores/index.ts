// Exporta stores del Shell
import { createPinia, setActivePinia, Pinia } from 'pinia';

let piniaInstance: Pinia | null = null;

export const getPinia = (): Pinia => {
  if (!piniaInstance) {
    piniaInstance = createPinia();
    setActivePinia(piniaInstance);
  }
  return piniaInstance;
};

export const setPinia = (pinia: Pinia): void => {
  piniaInstance = pinia;
  setActivePinia(pinia);
};

export { useConfigStore } from './configStore';
export type { Theme, ConfigState } from './configStore';
