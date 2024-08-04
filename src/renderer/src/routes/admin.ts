import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/:any(.*)*',
  component: () => import('@renderer/layouts/admin/index.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@renderer/views/admin/home.vue'),
    },
    {
      path: '/blackWord',
      name: 'blackWord',
      component: () => import('@renderer/views/admin/blackWord.vue'),
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('@renderer/views/admin/friend.vue'),
    },
    {
      path: '/groupMsg',
      name: 'groupMsg',
      component: () => import('@renderer/views/admin/groupMsg.vue'),
    },
    {
      path: '/groupReply',
      name: 'groupReply',
      component: () => import('@renderer/views/admin/groupReply.vue'),
    },
    {
      path: '/makeApi',
      name: 'makeApi',
      component: () => import('@renderer/views/admin/makeApi.vue'),
    },
    {
      path: '/peopleReply',
      name: 'peopleReply',
      component: () => import('@renderer/views/admin/peopleReply.vue'),
    },
    {
      path: '/msgShare',
      name: 'msgShare',
      component: () => import('@renderer/views/admin/msgShare.vue'),
    },
  ],
} as RouteRecordRaw
