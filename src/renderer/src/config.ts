import appMiddleware from '@renderer/middleware/appMiddleware'
export default {
  middleware: [appMiddleware],
  router: {
    prefix: '',
  },
  member: {
    menu: [
      {
        routeName: 'home',
        title: '助手首页',
      },
      {
        routeName: 'friend',
        title: '好友申请',
      },
      {
        routeName: 'peopleReply',
        title: '个人回复',
      },
      {
        routeName: 'groupReply',
        title: '群聊回复',
      },
      {
        routeName: 'msgShare',
        title: '消息转发',
      },
      {
        routeName: 'blackWord',
        title: '屏蔽检测',
      },
      {
        routeName: 'groupMsg',
        title: '群发消息',
      },
      {
        routeName: 'makeApi',
        title: '定制接口',
      },
    ],
  },
}
