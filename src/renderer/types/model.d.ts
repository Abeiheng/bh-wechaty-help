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
interface GroupReplyModel {
  id: number
  planName: string
  listenRoom: string
  triggerWord: string
  msgOne: string
  msgTwo: string
  msgThree: string
  status: boolean
  userId: number
  User: UserModel
}
interface MsgShareModel {
  id: number
  planName: string
  listenRoom: string
  shareRoom: string
  status: boolean
  userId: number
  User: UserModel
}
interface GroupShareModel {
  id: number
  planName: string
  sendRoom: string
  msgOne: string
  msgTwo: string
  msgThree: string
  gapNum: number
  status: boolean
  userId: number
  User: UserModel
}
interface MsgModel {
  message: string
}
