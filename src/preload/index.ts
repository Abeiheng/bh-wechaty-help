import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  startBot: () => {
    return ipcRenderer.invoke('startBot')
  },
  botStatus: () => {
    return ipcRenderer.invoke('botStatus')
  },
  wechatyScan: (qrcode: any) => ipcRenderer.on('wechatyScan', qrcode),
  wechatyLogin: (userInfo: any) => ipcRenderer.on('wechatyLogin', userInfo),
  userBotOut: (callBack) => ipcRenderer.on('userBotOut', callBack),
}
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
