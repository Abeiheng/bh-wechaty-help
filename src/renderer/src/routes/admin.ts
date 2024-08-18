import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/:any(.*)*',
  component: () => import('@renderer/layouts/admin/index.vue'),
  meta: { auth: true },
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@renderer/views/admin/home.vue'),
      meta: { auth: true },
    },
    {
      path: '/blackWord',
      name: 'blackWord',
      component: () => import('@renderer/views/admin/blackWord.vue'),
      meta: { auth: true },
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('@renderer/views/admin/friend.vue'),
      meta: { auth: true },
    },
    {
      path: '/groupMsg',
      name: 'groupMsg',
      component: () => import('@renderer/views/admin/groupMsg.vue'),
      meta: { auth: true },
    },
    {
      path: '/groupReply',
      name: 'groupReply',
      component: () => import('@renderer/views/admin/groupReply.vue'),
      meta: { auth: true },
    },
    {
      path: '/msgLogs',
      name: 'msgLogs',
      component: () => import('@renderer/views/admin/msgLogs.vue'),
      meta: { auth: true },
    },
    {
      path: '/peopleReply',
      name: 'peopleReply',
      component: () => import('@renderer/views/admin/peopleReply.vue'),
      meta: { auth: true },
    },
    {
      path: '/msgShare',
      name: 'msgShare',
      component: () => import('@renderer/views/admin/msgShare.vue'),
      meta: { auth: true },
    },
  ],
} as RouteRecordRaw
