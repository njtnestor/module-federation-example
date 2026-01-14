<template>
  <div class="remote-component" :class="themeClass">
    <div class="component-header">
      <h2>🚀 Componente Remoto de Vue 3</h2>
      <p>Este componente se carga desde la aplicación remota (puerto 3001)</p>
    </div>

    <div class="component-body">
      <!-- Info del componente -->
      <div class="feature-card info-card">
        <h3>ℹ️ Información</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">Origen:</span>
            <span class="value">Remote (3001)</span>
          </div>
          <div class="info-item">
            <span class="label">Tema:</span>
            <span class="value">{{ theme }} (desde Pinia)</span>
          </div>
        </div>
        <button @click="toggleTheme" class="btn btn-theme">
          {{ theme === 'light' ? '🌙 Cambiar a Oscuro' : '☀️ Cambiar a Claro' }}
        </button>
        <router-link to="/remote/hello" class="btn btn-hello">
          👋 Ir a Hello World
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useConfigStore } from '../stores/fallbackStore';

// Usar el store local (fallback)
// El store se sincroniza automáticamente si Pinia es singleton
const store = useConfigStore();
const { theme } = storeToRefs(store);
const toggleTheme = () => store.toggleTheme();

// Tema
const themeClass = computed(() => `theme-${theme.value}`);
</script>

<style scoped>
.remote-component {
  border: 3px solid #e94560;
  border-radius: 16px;
  overflow: hidden;
  animation: slideIn 0.5s ease;
  transition: all 0.3s ease;
}

.remote-component.theme-dark {
  background: #1a1a2e;
  color: #fff;
}

.remote-component.theme-dark .feature-card {
  background: #16213e;
  color: #fff;
}

.remote-component.theme-dark .feature-card h3 {
  color: #fff;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.component-header {
  background: linear-gradient(135deg, #e94560 0%, #0f3460 100%);
  color: white;
  padding: 25px;
  text-align: center;
}

.component-header h2 { margin-bottom: 8px; font-size: 1.4rem; }
.component-header p { opacity: 0.9; font-size: 0.9rem; }

.component-body {
  padding: 25px;
  background: #fafbfc;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.theme-dark .component-body { background: #1a1a2e; }

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}

.feature-card h3 {
  color: #1a1a2e;
  margin-bottom: 15px;
  font-size: 1.1rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn:hover { transform: scale(1.05); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }

.info-card { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
.info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }

.info-item { display: flex; flex-direction: column; gap: 4px; }
.info-item .label { font-size: 0.8rem; color: #868e96; text-transform: uppercase; }
.info-item .value { font-weight: 600; color: #1a1a2e; }

.theme-dark .info-item .value { color: #fff; }

.btn-theme {
  margin-top: 15px;
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
}

.btn-theme:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.btn-hello {
  margin-top: 10px;
  width: 100%;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  display: block;
}

.btn-hello:hover {
  background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
}
</style>
