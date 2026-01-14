// Intenta importar el store del shell, si falla usa el fallback local
export async function getConfigStore() {
  try {
    // Intentar cargar desde el shell (cuando está embebido)
    const shellStores = await import('shell/stores');
    return shellStores.useConfigStore;
  } catch (error) {
    console.warn('Shell store not available, using fallback store');
    // Usar store local de fallback (modo standalone)
    const { useConfigStore } = await import('./fallbackStore.js');
    return useConfigStore;
  }
}
