import useStorage from '@renderer/composables/useStorage'
import { ElMessage } from 'element-plus'

setTimeout(() => {
  const storage = useStorage()
  window.api.userBotOut((_event, status: any) => {
    if (status === 'botOut') {
      storage.remove('wechatyInfo')
      ElMessage({ type: 'error', message: '机器人已退出', duration: 2000 })
    }
  })
}, 1000)
