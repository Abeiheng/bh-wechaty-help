import { CacheEnum } from '@renderer/enum/CacheEnum'
import useStorage from './useStorage'

export default () => {
  //登录检测
  function isLogin(): boolean {
    return useStorage().get(CacheEnum.TOKEN_NAME)
  }

  return {isLogin}
}