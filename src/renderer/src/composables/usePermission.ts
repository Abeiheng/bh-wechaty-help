import { http } from '@renderer/plugins/axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export default () => {
  const userPower = ref<UserPowerModel>()
  const getAllPermissions = async () => {
    userPower.value = await http.request<UserPowerModel>({
      url: '/permission/getAllPermissions',
    })
  }
  const updatePermission = async () => {
    const res = await http.request<MsgModel>({
      url: '/permission/updatePermission',
      method: 'PUT',
      data: userPower.value,
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllPermissions()
  }
  return { getAllPermissions, userPower, updatePermission }
}
