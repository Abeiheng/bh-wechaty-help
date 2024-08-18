import { http } from '@renderer/plugins/axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export default () => {
  const userPower = ref<UserPowerModel>()
  const pageResult = ref<ApiPage<msgLogs>>()
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
  const getOnePermission = (type: string) => {
    return http.request<boolean>({
      url: '/permission/getOnePermission',
      method: 'GET',
      params: {
        type,
      },
    })
  }
  const getAllLogs = async (page = 1) => {
    pageResult.value = await http.request<ApiPage<msgLogs>>({
      url: '/public/getAllLogs',
      method: 'GET',
      params: {
        page,
      },
    })
  }
  return { getAllPermissions, userPower, updatePermission, getOnePermission, getAllLogs, pageResult }
}
