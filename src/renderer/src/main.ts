import { createApp } from 'vue'
import App from './App.vue'
import '@renderer/assets/global.scss'
import plugin from '@renderer/plugins'
function bootstrap() {
    const app = createApp(App)
    plugin(app)
    app.mount('#app')
  }
  
  bootstrap()