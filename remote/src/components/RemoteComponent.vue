<template>
  <div class="remote-component" :class="themeClass">
    <div class="component-header">
      <h2>🚀 Componente Remoto de Vue 3</h2>
      <p>Este componente se carga desde la aplicación remota (puerto 3001)</p>
    </div>

    <div class="component-body">
      <!-- Lista de tareas -->
      <div class="feature-card">
        <h3>📝 Mini Lista de Tareas</h3>
        <div class="todo-input">
          <input 
            v-model="newTask" 
            @keyup.enter="addTask" 
            placeholder="Agregar nueva tarea..."
            class="input-field"
          />
          <button @click="addTask" class="btn btn-add">Agregar</button>
        </div>
        <ul class="todo-list">
          <li v-for="(task, index) in tasks" :key="index" class="todo-item">
            <span :class="{ completed: task.done }" @click="toggleTask(index)">
              {{ task.done ? '✅' : '⬜' }} {{ task.text }}
            </span>
            <button @click="removeTask(index)" class="btn-delete">×</button>
          </li>
        </ul>
        <p v-if="tasks.length === 0" class="empty-state">No hay tareas aún</p>
      </div>

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
      </div>
    </div>

    <div class="component-footer">
      <span class="timestamp">Cargado: {{ loadedAt }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { getConfigStore } from '../stores/index.js';

// Importar store (del shell si está disponible, o fallback local)
const useConfigStore = await getConfigStore();
const store = useConfigStore();
const { theme } = storeToRefs(store);
const { toggleTheme } = store;

// Tema
const themeClass = computed(() => `theme-${theme.value}`);

// Estado local
const loadedAt = ref('');

// Lista de tareas (local)
const newTask = ref('');
const tasks = ref([
  { text: 'Aprender Module Federation', done: true },
  { text: 'Store en el Shell (padre)', done: true },
  { text: 'Remote consume store del padre', done: true }
]);

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value.trim(), done: false });
    newTask.value = '';
  }
};

const removeTask = (index) => tasks.value.splice(index, 1);
const toggleTask = (index) => tasks.value[index].done = !tasks.value[index].done;

onMounted(() => {
  loadedAt.value = new Date().toLocaleTimeString('es-ES');
});
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

.remote-component.theme-dark .input-field {
  background: #0f3460;
  color: #fff;
  border-color: #e94560;
}

.remote-component.theme-dark .todo-item {
  background: #0f3460;
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

.todo-input { display: flex; gap: 10px; margin-bottom: 15px; }

.input-field {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.2s ease;
}

.input-field:focus { outline: none; border-color: #e94560; }

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-add { background: #e94560; color: white; padding: 12px 20px; }
.btn:hover { transform: scale(1.05); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }

.todo-list { list-style: none; padding: 0; margin: 0; }

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: background 0.2s ease;
}

.todo-item:hover { background: #f1f3f5; }
.todo-item span { cursor: pointer; flex: 1; }
.todo-item span.completed { text-decoration: line-through; color: #868e96; }

.btn-delete {
  background: #ff6b6b;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
}

.btn-delete:hover { transform: scale(1.1); }
.empty-state { text-align: center; color: #868e96; padding: 20px; font-style: italic; }

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

.component-footer {
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 25px;
  text-align: center;
  font-size: 0.85rem;
}
</style>
