import FingerprintJS from '@fingerprintjs/fingerprintjs'
import useAuth from '@renderer/composables/useAuth'
import config from '@renderer/config'
import { RouteLocationNormalized, Router } from 'vue-router'
let isInit = false
const { login, isLogin } = useAuth()
export default (router: Router) => {
  router.beforeEach(beforeEach)
}

//路由守卫
async function beforeEach(to: RouteLocationNormalized, _from: RouteLocationNormalized) {
  await init()
  if (to.meta.auth && !isLogin()) {
    const fp = await FingerprintJS.load()
    const result = await fp.get()
    await login(result.visitorId)
  }
}

//初始应用
async function init() {
  if (isInit === true) return
  isInit = true
  await Promise.all(config.middleware.map((middleware) => middleware()))
}
