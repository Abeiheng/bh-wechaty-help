import { electronApp, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, shell } from 'electron'
import path, { join } from 'path'
import icon from '../../resources/icon.png?asset'
import { createTray } from './tray'
import './ipcMain'
import { Conf } from 'electron-conf/main'
const conf = new Conf()
conf.registerRendererListener()
function createWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    show: false,
    alwaysOnTop: false,
    resizable: false,
    frame: false,
    autoHideMenuBar: false,
    skipTaskbar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F12' || (input.control && input.key === 'KeyI')) {
      event.preventDefault()
    }
  })
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
  return mainWindow
}
app.whenReady().then(() => {
  if (process.platform == 'darwin') app.dock.hide()
  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  const win = createWindow()
  createTray(win)
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
