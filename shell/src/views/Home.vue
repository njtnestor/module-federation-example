<template>
  <div class="home-view">
    <div class="welcome-card">
      <h2>👋 ¡Bienvenido a Module Federation!</h2>
      <p>Esta es la aplicación <strong>Shell (Host)</strong> que actúa como contenedor principal.</p>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <div class="card-icon">🏠</div>
        <h3>Shell App</h3>
        <p>Aplicación contenedora que ejecuta en el puerto <code>3000</code></p>
        <ul>
          <li>Gestiona el layout y menú</li>
          <li>Carga módulos remotos</li>
          <li>Controla el routing</li>
        </ul>
      </div>

      <div class="info-card">
        <div class="card-icon">🔗</div>
        <h3>Remote App</h3>
        <p>Aplicación remota que ejecuta en el puerto <code>3001</code></p>
        <ul>
          <li>Expone componentes</li>
          <li>Se carga dinámicamente</li>
          <li>Independiente del Shell</li>
        </ul>
      </div>

      <div class="info-card full-width">
        <div class="card-icon">⚡</div>
        <h3>Module Federation</h3>
        <p>Webpack 5 Module Federation permite compartir código entre aplicaciones en tiempo de ejecución.</p>
        <div class="features">
          <span class="feature">Lazy Loading</span>
          <span class="feature">Shared Dependencies</span>
          <span class="feature">Independent Deployment</span>
          <span class="feature">Runtime Integration</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.home-view {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.welcome-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.welcome-card h2 {
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.welcome-card p {
  font-size: 1rem;
  opacity: 0.9;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.info-card.full-width {
  grid-column: 1 / -1;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.info-card h3 {
  color: #1a1a2e;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.info-card p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.info-card code {
  background: #e8f4f8;
  color: #0984e3;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.info-card ul {
  list-style: none;
  padding: 0;
}

.info-card li {
  padding: 8px 0;
  color: #555;
  font-size: 0.9rem;
  border-bottom: 1px solid #f0f0f0;
}

.info-card li:last-child {
  border-bottom: none;
}

.info-card li::before {
  content: "✓ ";
  color: #00b894;
  font-weight: bold;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.feature {
  background: linear-gradient(135deg, #64dfdf 0%, #6c5ce7 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
