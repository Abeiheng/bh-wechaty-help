import { http } from '@renderer/plugins/axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export default () => {
  const replyList = ref<PeopleReplyModel[]>()
  const replyInfo = ref<PeopleReplyModel>()
  const getAllReplyList = async () => {
    replyList.value = await http.request<PeopleReplyModel[]>({
      url: '/peopleReply/getAllReplyList',
    })
  }
  const getReplyById = async (id: number) => {
    replyInfo.value = await http.request<PeopleReplyModel>({
      url: `/peopleReply/getReplyById/${id}`,
    })
  }
  const createReply = async (data: Record<string, any>) => {
    const res = await http.request<MsgModel>({
      url: '/peopleReply/createReply',
      method: 'POST',
      data,
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllReplyList()
  }

  const deleteReply = async (id: number) => {
    const res = await http.request<MsgModel>({
      url: `/peopleReply/deleteReply/${id}`,
      method: 'DELETE',
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllReplyList()
  }
  const updateReply = async () => {
    const res = await http.request<MsgModel>({
      url: `/peopleReply/updateReply/${replyInfo.value?.id}`,
      method: 'PATCH',
      data: replyInfo.value,
    })
    ElMessage({ message: res.message, type: 'success', duration: 1000 })
    getAllReplyList()
  }
  return { getAllReplyList, replyList, createReply, updateReply, replyInfo, deleteReply, getReplyById }
}
