<template>
  <div class="remote-standalone">
    <header class="standalone-header">
      <h1>🔗 Remote App</h1>
      <p>Esta aplicación se ejecuta de forma independiente en el puerto 3001</p>
      <span class="badge">Standalone Mode</span>
    </header>
    
    <main class="standalone-content">
      <RemoteComponent />
    </main>
    
    <footer class="standalone-footer">
      <p>💡 Este componente también está disponible para ser consumido por la aplicación Shell</p>
    </footer>
  </div>
</template>

<script>
import RemoteComponent from './components/RemoteComponent.vue';

export default {
  name: 'App',
  components: {
    RemoteComponent
  }
};
</script>

<style>
.remote-standalone {
  max-width: 900px;
  margin: 0 auto;
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
}

.standalone-footer {
  text-align: center;
  padding: 20px;
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  font-size: 0.9rem;
}
</style>
