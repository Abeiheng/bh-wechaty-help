import { createRouter, createWebHistory } from 'vue-router'
import routes from '@renderer/routes'
import config from '@renderer/config'
<<<<<<< HEAD
import guard from './guard'
=======
>>>>>>> 766feb282a2d5c8c69d5ff637d6f7ce894d7f883
import { App } from 'vue'

//添加路由前缀
routes.forEach((route) => {
  if (!route.meta?.noPrefix) {
    route.path = config.router.prefix + route.path
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
<<<<<<< HEAD
guard(router)
=======

>>>>>>> 766feb282a2d5c8c69d5ff637d6f7ce894d7f883
const setup = (app: App) => {
  app.use(router)
}
export { setup }
export default router
