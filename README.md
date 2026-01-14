# Module Federation - Vue 3 Example

Este proyecto demuestra cómo implementar **Webpack Module Federation** con dos aplicaciones Vue 3.

## 🚀 Cómo ejecutar

### 1. Instalar dependencias

```bash
# Terminal 1 - Remote App
cd remote
npm install

# Terminal 2 - Shell App
cd shell
npm install
```

### 2. Iniciar las aplicaciones

**⚠️ Importante:** Primero inicia la aplicación remota, luego la shell.

```bash
# Terminal 1 - Iniciar Remote App (Puerto 3001)
cd remote
npm run serve

# Terminal 2 - Iniciar Shell App (Puerto 3000)
cd shell
npm run serve
```

### 3. Acceder a las aplicaciones

- **Shell App (Host):** http://localhost:3000
- **Remote App (Standalone):** http://localhost:3001

## 🔧 Configuración de Module Federation

### Shell (Host) - webpack.config.js

```javascript
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js'
  },
  shared: {
    vue: { singleton: true },
    'vue-router': { singleton: true }
  }
})
```

### Remote - webpack.config.js

```javascript
new ModuleFederationPlugin({
  name: 'remoteApp',
  filename: 'remoteEntry.js',
  exposes: {
    './RemoteComponent': './src/components/RemoteComponent.vue'
  },
  shared: {
    vue: { singleton: true },
    'vue-router': { singleton: true }
  }
})
```

## 📝 Cómo funciona

1. **Remote App** expone componentes a través de `exposes` y genera un archivo `remoteEntry.js`
2. **Shell App** consume los componentes remotos a través de `remotes`
3. Las dependencias compartidas (`vue`, `vue-router`) se cargan como singletons para evitar duplicados
4. Los componentes se cargan de forma **lazy** usando `import()` dinámico


## 🛠️ Tecnologías utilizadas

- Vue 3 (Composition API)
- Vue Router 4
- Webpack 5
- Module Federation Plugin
