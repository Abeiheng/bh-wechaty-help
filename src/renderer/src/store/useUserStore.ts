import { http } from '@renderer/plugins/axios'
import useAuth from '@renderer/composables/useAuth'
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    return {
      user: undefined as UserModel | undefined,
    }
  },
  actions: {
    async getCurrentUser() {
      if (useAuth().isLogin()) {
        this.user = await http.request<UserModel>({
          url: '/user/info',
        })
      }
    },
  },
})
