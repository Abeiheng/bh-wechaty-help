import { http } from '@renderer/plugins/axios'
import { ref } from 'vue'

export default () => {
  const userPower = ref<UserPowerModel>()
  const getAllPermissions = async () => {
    userPower.value = await http.request<UserPowerModel>({
      url: '/permission/getAllPermissions',
    })
  }
  return { getAllPermissions, userPower }
}
