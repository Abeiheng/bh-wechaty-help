import { ElMessage } from 'element-plus'
import { RouteLocationNormalized, Router } from 'vue-router'
import config from '@renderer/config'
import useAuth from '@renderer/composables/useAuth'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import useStorage from '@renderer/composables/useStorage'
let isInit = false
export default (router: Router) => {
  router.beforeEach(beforeEach)
}

//路由守卫
async function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  await init()
  const { isLogin } = useAuth()
  if (to.meta.auth && !isLogin()) {
    ElMessage.success('请登录后操作')
    const fp = await FingerprintJS.load()
    const result = await fp.get()
    useStorage().set('fingerprint', result.visitorId)
  }

  if (to.meta.guest && isLogin()) return '/'
}

//初始应用
async function init() {
  if (isInit === true) return
  isInit = true
  await Promise.all(config.middleware.map((middleware) => middleware()))
}
