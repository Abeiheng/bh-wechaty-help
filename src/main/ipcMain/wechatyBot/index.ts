import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron'
import { log, ScanStatus, WechatyBuilder } from 'wechaty'
import usePermission from '../composables/usePermission'
import { friendPlan } from './plugins/friendPlan'
import { peopleReply } from './plugins/peopleReply'
import { blackWord } from './plugins/blackWord'
import { groupReply } from './plugins/groupReply'
import { msgShare } from './plugins/msgShare'
import { groupMsg } from './plugins/groupMsg'
const { permissionStatus, getTopicType } = usePermission()
const bot = WechatyBuilder.build({
  name: 'bhBot',
})
ipcMain.handle('startBot', async (event: IpcMainInvokeEvent) => {
  try {
    await bot.stop()
  } catch (err) {
    console.log('又错了')
  }
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
    .on('message', async (message) => {
      const msgAge = message.age()
      const room = message.room()
      const talkerMsg = message.text()
      const talker = message.talker()
      if (!message.self() && msgAge <= 60 && !room && message.type() === bot.Message.Type.Text) {
        //私聊文本处理
        const peopleReplyStatus = await permissionStatus('peopleReply')
        if (peopleReplyStatus) {
          await peopleReply(talkerMsg, talker)
        }
      } else if (!message.self() && msgAge <= 60 && room) {
        //群聊处理
        const blackWordStatus = await permissionStatus('blackWord')
        if (blackWordStatus) {
          const checkResult = await blackWord(talkerMsg, room, talker, message)
          if (!checkResult) {
            const topic = await room.topic()
            const roomType = await getTopicType(topic)
            if (roomType === 'groupReply') {
              //群聊关键词回复
              const groupReplyStatus = await permissionStatus('groupReply')
              if (groupReplyStatus) {
                await groupReply(talkerMsg, topic, talker.payload?.name!, room)
              }
            } else if (roomType === 'msgShare' && message.type() === bot.Message.Type.Text) {
              //消息转发
              const msgShareStatus = await permissionStatus('msgShare')
              if (msgShareStatus) {
                await msgShare(topic, talkerMsg, bot)
              }
            }
            return
          }
        }
      }
    })
    .on('friendship', async (friendship) => {
      const friendStatus = await permissionStatus('friend')
      if (friendStatus) {
        await friendPlan(friendship, bot)
      }
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

ipcMain.on('sendMsg', async (_event, id: number) => {
  await groupMsg(bot, id)
})

const checkBotStatus = (win: BrowserWindow | null) => {
  try {
    const res = bot.isLoggedIn
    if (res) {
      win?.webContents.send('userBotOut', 'login')
    } else {
      botQuit(win)
    }
  } catch (error: any) {
    console.log(error.code)
    if (error.code == 2) {
      botQuit(win)
    }
  }
}

const botQuit = async (win: BrowserWindow | null) => {
  try {
    await bot.logout()
    await bot.stop()
  } catch (err) {
    console.log('忽略了')
  }
  win?.webContents.send('userBotOut', 'logOut')
}
