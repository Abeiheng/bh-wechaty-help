import { http } from '@renderer/plugins/axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export default () => {
  const shareList = ref<MsgShareModel[]>()
  const shareInfo = ref<MsgShareModel>()
  const getAllShareList = async () => {
    shareList.value = await http.request<MsgShareModel[]>({
      url: '/msgShare/getAllShareList',
    })
  }
  const getShareById = async (id: number) => {
    shareInfo.value = await http.request<MsgShareModel>({
      url: `/msgShare/getShareById/${id}`,
    })
  }
  const createShare = async (data: Record<string, any>) => {
    const res = await http.request<MsgModel>({
      url: '/msgShare/createShare',
      method: 'POST',
      data,
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllShareList()
  }

  const deleteShare = async (id: number) => {
    const res = await http.request<MsgModel>({
      url: `/msgShare/deleteShare/${id}`,
      method: 'DELETE',
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllShareList()
  }
  const updateShare = async () => {
    const res = await http.request<MsgModel>({
      url: `/msgShare/updateShare/${shareInfo.value?.id}`,
      method: 'PATCH',
      data: shareInfo.value,
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllShareList()
  }
  return { getAllShareList, shareList, createShare, updateShare, shareInfo, deleteShare, getShareById }
}
