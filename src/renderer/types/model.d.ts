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
  verifyMsg: string
  callMsg: string
  status: boolean
  userId: number
  User: UserModel
}
interface PeopleReplyModel {
  id: number
  planName: string
  triggerWord: string
  msgOne: string
  msgTwo: string
  msgThree: string
  status: boolean
  userId: number
  User: UserModel
}
interface MsgModel {
  message: string
}
