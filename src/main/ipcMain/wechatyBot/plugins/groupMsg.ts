import { WechatyInterface } from 'wechaty/impls'
import useGroupMsg from '../../composables/useGroupMsg'
import { BrowserWindow } from 'electron'
const { getShareById } = useGroupMsg()
const groupMsg = async (bot: WechatyInterface, id: number, win: BrowserWindow) => {
  const groupSharMsg = await getShareById(+id)
  let sendRoomList = groupSharMsg.sendRoom.split('#')
  for (let i = 0; i < sendRoomList.length; i++) {
    const room = await bot.Room.find({ topic: sendRoomList[i] })
    console.log('找到房间了')
    if (room) {
      const messages = [groupSharMsg.msgOne, groupSharMsg.msgTwo, groupSharMsg.msgThree].filter(Boolean)
      for (const message of messages) {
        await room.say(message)
        await delay(groupSharMsg.gapNum * 1000)
      }
      await delay(2000)
    }
  }
  win?.webContents.send('userBotOut', 'success')
}
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export { groupMsg }
