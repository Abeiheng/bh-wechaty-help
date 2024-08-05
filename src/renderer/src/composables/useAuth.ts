import { CacheEnum } from '@renderer/enum/CacheEnum'
import useStorage from './useStorage'
import { http } from '@renderer/plugins/axios'
import { reactive } from 'vue'
import useUserStore from '@renderer/store/useUserStore'

export default () => {
  const form = reactive({
    userKey: '',
  })
  const storage = useStorage()
  //登录检测
  function isLogin(): boolean {
    return useStorage().get(CacheEnum.TOKEN_NAME)
  }
  const login = async (userKey: string) => {
    const { token } = await http.request<{ token: string }>({
      url: '/user/login',
      method: 'POST',
      data: {
        userKey,
      },
    })
    storage.set(CacheEnum.TOKEN_NAME, token)
    useUserStore().getCurrentUser()
    return true
  }
  return { isLogin, form, login }
}
