<template>
  <div class="remote-view">
    <Suspense>
      <template #default>
        <RemoteComponent />
      </template>
      <template #fallback>
        <div class="loading">
          <div class="spinner"></div>
          <p>Cargando componente remoto...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue';
import { getActivePinia } from 'pinia';

// Importamos el componente remoto
const RemoteComponent = defineAsyncComponent(() => import('remoteApp/RemoteComponent'));

// Asegurar que el store use la misma instancia de Pinia
onMounted(async () => {
  try {
    const { setPinia } = await import('remoteApp/stores');
    setPinia(getActivePinia());
  } catch (e) {
    console.error('Error configurando store:', e);
  }
});
</script>

<style scoped>
.remote-view {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: white;
  border-radius: 12px;
  color: #666;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e0e0e0;
  border-top-color: #e94560;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
