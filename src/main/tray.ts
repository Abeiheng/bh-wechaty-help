import { app, BrowserWindow, Menu, Tray } from 'electron'
const path = require('path')
const createTray = (win: BrowserWindow) => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/macTray@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '最小化',
      click: () => {
        win.hide()
      }
    },
    {
      label: '打开应用',
      click: () => {
        win.show()
      }
    },
    {
      label: '关闭程序',
      click: () => {
        win.webContents.send('quit')
        app.quit()
      }
    }
  ])
  tray.setToolTip('北恒微信助手')
  tray.setContextMenu(contextMenu)
}

export { createTray }
