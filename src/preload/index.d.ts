import { ElectronAPI } from '@electron-toolkit/preload'
import { ContactSelfInterface } from 'wechaty/impls'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      startBot: () => Promise<boolean>
      sendMsg: (id: number) => void
      botStatus: () => boolean
      wechatyScan: (callBack: Function) => void
      wechatyLogin: (callBack: Function) => ContactSelfInterface
      userBotOut: (callBack: Function) => void
    }
  }
}
