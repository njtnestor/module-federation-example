<template>
  <div class="about-view">
    <div class="about-header">
      <h2>ℹ️ Acerca de este ejemplo</h2>
    </div>

    <div class="about-content">
      <section class="section">
        <h3>📁 Estructura del Proyecto</h3>
        <pre class="code-block">
mf/
├── shell/                 # Aplicación Host (Puerto 3000)
│   ├── src/
│   │   ├── App.vue        # Layout con menú
│   │   ├── main.js        # Entrada + Router
│   │   └── views/         # Vistas locales
│   ├── webpack.config.js  # Config Module Federation
│   └── package.json
│
└── remote/                # Aplicación Remota (Puerto 3001)
    ├── src/
    │   ├── App.vue
    │   ├── main.js
    │   └── components/    # Componentes expuestos
    ├── webpack.config.js  # Config Module Federation
    └── package.json
        </pre>
      </section>

      <section class="section">
        <h3>🔧 Cómo funciona</h3>
        <div class="steps">
          <div class="step">
            <span class="step-number">1</span>
            <div class="step-content">
              <h4>Shell (Host)</h4>
              <p>Define los módulos remotos que consumirá en su webpack.config.js usando <code>remotes</code>.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <div class="step-content">
              <h4>Remote</h4>
              <p>Expone componentes usando <code>exposes</code> en su configuración de webpack.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <div class="step-content">
              <h4>Shared Dependencies</h4>
              <p>Vue y vue-router se comparten como singletons para evitar duplicados.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>🚀 Comandos para ejecutar</h3>
        <div class="commands">
          <div class="command">
            <code>cd remote && npm install && npm run serve</code>
            <span class="desc">Inicia la app remota en puerto 3001</span>
          </div>
          <div class="command">
            <code>cd shell && npm install && npm run serve</code>
            <span class="desc">Inicia la app shell en puerto 3000</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style scoped>
.about-view {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.about-header {
  background: white;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.about-header h2 {
  color: #1a1a2e;
  margin: 0;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.section {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.section h3 {
  color: #1a1a2e;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.code-block {
  background: #1a1a2e;
  color: #64dfdf;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  overflow-x: auto;
  line-height: 1.6;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.step-number {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h4 {
  color: #1a1a2e;
  margin-bottom: 5px;
}

.step-content p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.step-content code {
  background: #e8f4f8;
  color: #0984e3;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.commands {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.command {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #64dfdf;
}

.command code {
  background: #1a1a2e;
  color: #64dfdf;
  padding: 10px 15px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
}

.command .desc {
  color: #666;
  font-size: 0.85rem;
  margin-left: 5px;
}
</style>
