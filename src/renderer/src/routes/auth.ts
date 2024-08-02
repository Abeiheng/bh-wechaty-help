import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/',
  meta: { noPrefix: true },
  children: [
    {
      path: '/:any(.*)*',
      name: 'login',
      component: () => import('@renderer/views/auth/login.vue'),
    },
  ],
} as RouteRecordRaw