import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron'
import { log, ScanStatus, WechatyBuilder } from 'wechaty'
const bot = WechatyBuilder.build({
  name: 'bhBot',
})
ipcMain.handle('startBot', async (event: IpcMainInvokeEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  bot
    .on('scan', (qrcode, status) => {
      console.log(status)
      if (status === ScanStatus.Waiting && qrcode) {
        win?.webContents.send(
          'wechatyScan',
          ['https://api.qrserver.com/v1/create-qr-code/?data=', encodeURIComponent(qrcode)].join(''),
        )
      }
    })
    .on('login', (user) => {
      win?.webContents.send('wechatyLogin', user)
    })
    .on('error', async (error) => {
      log.error(`❌程序报错-程序报错-${error.code}❌`)
      if (error.code == 2) {
        botQuit(win)
      }
    })
  bot
    .start()
    .then(() => {
      log.info('🚀机器人启动🚀')
    })
    .catch((error) => {
      log.info(error, 'start的error')
    })
  return true
})
ipcMain.handle('botStatus', async (event: IpcMainInvokeEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  checkBotStatus(win)
})
const botQuit = async (win: BrowserWindow | null) => {
  await bot.logout()
  await bot.stop()
  win?.webContents.send('userBotOut', 'botOut')
}
const checkBotStatus = (win: BrowserWindow | null) => {
  try {
    const res = bot.isLoggedIn
    if (res) {
      console.log('登录中')
    } else {
      console.log('已退出')
    }
  } catch (error: any) {
    console.log(error.code)
    if (error.code == 2) {
      botQuit(win)
    }
  }
}
