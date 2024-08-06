interface UserModel {
  id: number
  userKey: String
  createdAt: string
  updatedAt: string
}
interface UserPowerModel {
  id: number
  friend: boolean
  peopleReply: boolean
  groupReply: boolean
  msgShare: boolean
  blackWord: boolean
  groupMsg: boolean
  makeApi: boolean
  userId: number
  User?: UserModel
}
interface FriendModel {
  id: number
  planName: string
  verifyMsg?: string
  callMsg?: string
  userId: number
  User?: UserModel
}
interface MsgModel {
  message: string
}
