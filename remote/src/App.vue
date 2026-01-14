<template>
  <div class="remote-standalone" :class="themeClass">
    <header class="standalone-header">
      <h1>🔗 Remote App</h1>
      <p>Esta aplicación se ejecuta de forma independiente en el puerto 3001</p>
    </header>
    
    <main class="standalone-content">
      <Suspense>
        <template #default>
          <RemoteComponent />
        </template>
        <template #fallback>
          <div class="loading">Cargando componente...</div>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useConfigStore } from './stores/fallbackStore';
import RemoteComponent from './components/RemoteComponent.vue';

const store = useConfigStore();
const { theme } = storeToRefs(store);
const themeClass = computed(() => `theme-${theme.value}`);

// Actualizar el body cuando cambie el tema
watch(theme, (newTheme) => {
  document.body.style.background = newTheme === 'dark' ? '#0f0f23' : '#f5f7fa';
}, { immediate: true });
</script>

<style>
/* Reset y estilos globales para el tema */
.remote-standalone.theme-dark {
  background: #0f0f23;
}

.remote-standalone {
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  transition: background 0.3s ease;
}

.standalone-header {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #e94560 0%, #0f3460 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
}

.standalone-header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.standalone-header p {
  opacity: 0.9;
  margin-bottom: 15px;
}

.standalone-header .badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.standalone-content {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 25px;
  transition: background 0.3s ease;
}

.theme-dark .standalone-content {
  background: #1a1a2e;
}

.standalone-footer {
  text-align: center;
  padding: 20px;
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  font-size: 0.9rem;
}

.theme-dark .standalone-footer {
  background: #0a0a15;
}

/* Estilos globales del body para tema oscuro */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: background 0.3s ease;
}
</style>
