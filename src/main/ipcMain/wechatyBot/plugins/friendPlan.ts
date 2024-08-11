import { BrowserWindow } from 'electron'
import { FriendshipInterface, WechatyInterface } from 'wechaty/impls'
const friendShip = async (friendship: FriendshipInterface, bot: WechatyInterface, win: BrowserWindow) => {
  await friendship.contact()
}
export { friendShip }
