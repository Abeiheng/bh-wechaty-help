import { http } from '@renderer/plugins/axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export default () => {
  const planList = ref<FriendModel[]>()
  const planInfo = ref<FriendModel>()
  const getAllPlanList = async () => {
    planList.value = await http.request<FriendModel[]>({
      url: '/friendPlan/getAllPlanList',
    })
  }
  const getPlanById = async (id: number) => {
    planInfo.value = await http.request<FriendModel>({
      url: `/friendPlan/getPlanById/${id}`,
    })
  }
  const createPlan = async (data: Record<string, any>) => {
    const res = await http.request<MsgModel>({
      url: '/friendPlan/createPlan',
      method: 'POST',
      data,
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllPlanList()
  }

  const deletePlan = async (id: number) => {
    const res = await http.request<MsgModel>({
      url: `/friendPlan/deletePlan/${id}`,
      method: 'DELETE',
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllPlanList()
  }
  const updatePlan = async () => {
    const res = await http.request<MsgModel>({
      url: `/friendPlan/updatePlan/${planInfo.value?.id}`,
      method: 'PATCH',
      data: planInfo.value,
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllPlanList()
  }
  return { getAllPlanList, planList, createPlan, updatePlan, planInfo, deletePlan, getPlanById }
}
