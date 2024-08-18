import useUserStore from '@renderer/store/useUserStore'
import { ElMessage } from 'element-plus'

setTimeout(() => {
  const { editStatus } = useUserStore()
  window.api.userBotOut(async (_event, status: any) => {
    if (status == 'logOut') {
      await editStatus(false)
      ElMessage({ type: 'error', message: '机器人已退出', duration: 2000 })
    } else if (status == 'login') {
      await editStatus(true)
      ElMessage({ type: 'success', message: '机器人正常运行中', duration: 2000 })
    }
  })
}, 1000)
