// Intenta importar el store del shell, si falla usa el fallback local
export async function getConfigStore() {
  try {
    // Intentar cargar desde el shell (cuando está embebido)
    const shellStores = await import('shell/stores');
    
    // Verificar que useConfigStore existe y es una función
    if (shellStores.useConfigStore && typeof shellStores.useConfigStore === 'function') {
      return shellStores.useConfigStore;
    }
    
    throw new Error('useConfigStore not found in shell/stores');
  } catch (error) {
    console.warn('Shell store not available, using fallback store:', error);
    // Usar store local de fallback (modo standalone)
    const { useConfigStore } = await import('./fallbackStore');
    return useConfigStore;
  }
}
