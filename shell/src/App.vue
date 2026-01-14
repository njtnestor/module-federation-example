<template>
  <div class="app-container" :class="themeClass">
    <!-- Sidebar Menu -->
    <aside class="sidebar">
      <div class="logo">
        <h2>🏠 Shell App</h2>
        <span class="subtitle">Module Federation</span>
      </div>
      
      <nav class="nav-menu">
        <router-link to="/" class="nav-item">
          <span class="icon">🏡</span>
          <span class="text">Inicio</span>
        </router-link>
        
        <router-link to="/remote" class="nav-item remote">
          <span class="icon">🔗</span>
          <span class="text">App Remota</span>
          <span class="badge">MF</span>
        </router-link>

        <router-link to="/about" class="nav-item">
          <span class="icon">ℹ️</span>
          <span class="text">Acerca de</span>
        </router-link>
      </nav>
      
      <!-- Theme Toggle en Sidebar -->
      <div class="theme-toggle">
        <button @click="toggleTheme" class="theme-btn">
          {{ currentTheme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro' }}
        </button>
      </div>
      
      <div class="sidebar-footer">
        <p>Puerto: 3000</p>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="header">
        <h1>Aplicación Shell (Host)</h1>
        <p>Este es el contenedor principal que carga módulos remotos</p>
      </header>
      
      <div class="content">
        <Suspense>
          <template #default>
            <router-view />
          </template>
          <template #fallback>
            <div class="loading">
              <div class="spinner"></div>
              <p>Cargando módulo remoto...</p>
            </div>
          </template>
        </Suspense>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useConfigStore } from './stores/configStore';

// Usar store local del shell
const store = useConfigStore();
const { theme } = storeToRefs(store);

const themeClass = computed(() => `theme-${theme.value}`);

const toggleTheme = () => {
  store.toggleTheme();
};

const currentTheme = theme;
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* ========== TEMA OSCURO GLOBAL ========== */
.app-container.theme-dark {
  background: #0f0f1a;
}

.app-container.theme-dark .sidebar {
  background: linear-gradient(135deg, #0a0a15 0%, #1a1a2e 100%);
}

.app-container.theme-dark .main-content {
  background: #1a1a2e;
}

.app-container.theme-dark .header {
  background: #16213e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.app-container.theme-dark .header h1 {
  color: #fff;
}

.app-container.theme-dark .header p {
  color: #aaa;
}

.app-container.theme-dark .content {
  background: #1a1a2e;
}

/* Tema oscuro para cards */
.app-container.theme-dark .welcome-card {
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
}

.app-container.theme-dark .info-card,
.app-container.theme-dark .about-header,
.app-container.theme-dark .section {
  background: #16213e;
  color: #fff;
}

.app-container.theme-dark .info-card h3,
.app-container.theme-dark .section h3 {
  color: #fff;
}

.app-container.theme-dark .info-card p,
.app-container.theme-dark .section p {
  color: #aaa;
}

/* ========== FIN TEMA OSCURO ========== */

/* Sidebar Styles */
.sidebar {
  width: 260px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.logo {
  padding: 25px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.logo h2 {
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.logo .subtitle {
  font-size: 0.75rem;
  color: #64dfdf;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.nav-menu {
  flex: 1;
  padding: 20px 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  margin: 5px 0;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-left-color: #64dfdf;
}

.nav-item.router-link-active {
  background: rgba(100, 223, 223, 0.15);
  color: #64dfdf;
  border-left-color: #64dfdf;
}

.nav-item .icon {
  font-size: 1.2rem;
  margin-right: 12px;
}

.nav-item .text {
  font-size: 0.95rem;
}

.nav-item.remote {
  position: relative;
}

.nav-item .badge {
  position: absolute;
  right: 20px;
  background: #e94560;
  color: white;
  font-size: 0.65rem;
  padding: 3px 8px;
  border-radius: 10px;
  font-weight: bold;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Theme Toggle Button */
.theme-toggle {
  padding: 15px 20px;
}

.theme-btn {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
}

/* Main Content Styles */
.main-content {
  flex: 1;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
}

.header {
  background: white;
  padding: 25px 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header h1 {
  color: #1a1a2e;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.header p {
  color: #666;
  font-size: 0.9rem;
}

.content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

/* Loading Styles */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e0e0e0;
  border-top-color: #64dfdf;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
