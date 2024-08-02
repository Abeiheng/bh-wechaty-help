import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/',
  meta: { noPrefix: true },
  children: [
    {
      path: '/:any(.*)*',
      name: 'login',
      component: () => import('@renderer/views/auth/login.vue'),
<<<<<<< HEAD
      meta: { auth: true },
    },
  ],
} as RouteRecordRaw
=======
    },
  ],
} as RouteRecordRaw
>>>>>>> 766feb282a2d5c8c69d5ff637d6f7ce894d7f883
