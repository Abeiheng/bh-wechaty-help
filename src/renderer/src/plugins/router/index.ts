import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@renderer/routes'
import config from '@renderer/config'
import guard from './guard'
import { App } from 'vue'

//添加路由前缀
routes.forEach((route) => {
  if (!route.meta?.noPrefix) {
    route.path = config.router.prefix + route.path
  }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
guard(router)
const setup = (app: App) => {
  app.use(router)
}
export { setup }
export default router
