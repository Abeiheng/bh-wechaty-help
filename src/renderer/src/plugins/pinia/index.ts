import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const setup = (app: App) => {
  app.use(createPinia().use(piniaPluginPersistedstate))
}

export { setup }
