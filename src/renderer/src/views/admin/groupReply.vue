<script setup lang="ts">
import { CloseOne, Dot, EditTwo } from '@icon-park/vue-next'
import useGroupReply from '@renderer/composables/useGroupReply'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const isEdit = ref(false)
const msgNumber = ref(1)
const replyForm = ref({
  planName: '',
  listenRoom: '',
  triggerWord: '',
  msgOne: '',
  msgTwo: '',
  msgThree: '',
  status: false,
})
const addMsg = () => {
  if (msgNumber.value < 3) {
    msgNumber.value++
  } else {
    ElMessage({ message: '消息回复最多可以设置3条', type: 'error', duration: 1000 })
  }
}
const handleDel = async (id: number) => {
  await deleteReply(id)
}
const handleEdit = async (id: number) => {
  await getReplyById(id)
  if (replyInfo.value?.msgThree) {
    msgNumber.value = 3
  } else if (replyInfo.value?.msgTwo) {
    msgNumber.value = 2
  }
  isEdit.value = true
}
const handleAdd = async () => {
  await createReply(replyForm.value)
  handleClear()
}
const handleUpdate = async () => {
  await updateReply()
  handleClear()
}
const handleClear = () => {
  replyForm.value = {
    planName: '',
    listenRoom: '',
    triggerWord: '',
    msgOne: '',
    msgTwo: '',
    msgThree: '',
    status: false,
  }
  msgNumber.value = 1
  isEdit.value = false
}
const { replyList, replyInfo, getAllReplyList, createReply, getReplyById, deleteReply, updateReply } = useGroupReply()
await getAllReplyList()
</script>

<template>
  <main class="main">
    <section class="section_left">
      <div class="font-bold text-black opacity-80 text-lg">群聊回复方案列表</div>
      <div class="overflow-y-auto h-[680px] flex flex-col gap-5 functonList">
        <div
          class="rounded-lg shadow-md p-3 bg-zinc-100 flex justify-between items-center"
          v-for="(item, index) of replyList"
          :key="index">
          <div class="flex gap-1 items-center">
            <dot theme="outline" size="18" :fill="item.status?'#67C23A':'#F56C6C'" />
            <span class="text-gray-800 opacity-80">{{ item.planName }}</span>
          </div>
          <div class="flex items-center gap-3">
            <edit-two theme="outline" size="18" fill="#409EFF" class="cursor-pointer" @click="handleEdit(item.id!)" />
            <close-one theme="outline" size="18" fill="#F56C6C" class="cursor-pointer" @click="handleDel(item.id!)" />
          </div>
        </div>
      </div>
      <div class="text-center text-sm text-gray-600 opacity-80">
        多种方案可以同时进行，如备注一样则以排名靠前为准(绿点代表进行中)
      </div>
    </section>
    <section class="section_right">
      <div class="config">
        <div class="font-bold text-black opacity-80 text-lg">配置管理</div>
        <el-form v-if="replyInfo && isEdit">
          <el-form-item label="方案名称">
            <el-input placeholder="请输入方案名称，最好不要重复" v-model="replyInfo.planName"></el-input>
          </el-form-item>
          <el-form-item label="监听群聊">
            <el-input
              placeholder="请输入监听群聊昵称,每个群聊以#分割，如：咨询#请问#询问,群聊昵称禁止有符号"
              :rows="2"
              type="textarea"
              v-model="replyInfo.listenRoom" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="触发条件">
            <el-input
              placeholder="请输入触发条件,每个条件以#分割，如：咨询#请问#询问"
              :rows="3"
              type="textarea"
              v-model="replyInfo.triggerWord" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="消息回复" v-if="msgNumber >= 1 || replyInfo.msgOne">
            <el-input
              placeholder="当触发上面条件会依次执行回复(上限三条，支持纯文本以及文件)"
              :rows="2"
              type="textarea"
              v-model="replyInfo.msgOne" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="消息回复" v-if="msgNumber >= 2 || replyInfo.msgOne">
            <el-input
              placeholder="当触发上面条件会依次执行回复(上限三条，支持纯文本以及文件)"
              :rows="2"
              type="textarea"
              v-model="replyInfo.msgTwo" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="消息回复" v-if="msgNumber >= 3 || replyInfo.msgThree">
            <el-input
              placeholder="当触发上面条件会依次执行回复(上限三条，支持纯文本以及文件)"
              :rows="2"
              type="textarea"
              v-model="replyInfo.msgThree" resize="none"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex justify-end flex-1">
              <div
                class="cursor-pointer text-center py-1 rounded-lg bg-[#e8edf6] shadow-sm nodrag text-gray-600 basis-1/4"
                @click="addMsg">
                新增回复
              </div>
            </div>
          </el-form-item>
          <el-form-item label="是否启动">
            <el-switch v-model="replyInfo.status" size="small" />
          </el-form-item>
          <el-form-item>
            <div class="flex justify-between flex-1">
              <div
                class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-1/4"
                @click="handleClear">
                清空
              </div>
              <div
                class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-2/3"
                @click="handleUpdate">
                修改配置数据
              </div>
            </div>
          </el-form-item>
        </el-form>
        <el-form v-if="!isEdit">
          <el-form-item label="方案名称">
            <el-input placeholder="请输入方案名称，最好不要重复" v-model="replyForm.planName"></el-input>
          </el-form-item>
          <el-form-item label="监听群聊">
            <el-input
              placeholder="请输入监听群聊昵称,每个群聊以#分割，如：咨询#请问#询问,群聊昵称禁止有符号"
              :rows="2"
              type="textarea"
              v-model="replyForm.listenRoom" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="触发条件">
            <el-input
              placeholder="请输入触发条件,每个条件以#分割，如：咨询#请问#询问"
              :rows="3"
              type="textarea"
              v-model="replyForm.triggerWord" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="消息回复" v-if="msgNumber >= 1">
            <el-input
              placeholder="当触发上面条件会依次执行回复(上限三条，支持纯文本以及文件)"
              :rows="2"
              type="textarea"
              v-model="replyForm.msgOne" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="消息回复" v-if="msgNumber >= 2">
            <el-input
              placeholder="当触发上面条件会依次执行回复(上限三条，支持纯文本以及文件)"
              :rows="2"
              type="textarea"
              v-model="replyForm.msgTwo" resize="none"></el-input>
          </el-form-item>
          <el-form-item label="消息回复" v-if="msgNumber >= 3">
            <el-input
              placeholder="当触发上面条件会依次执行回复(上限三条，支持纯文本以及文件)"
              :rows="2"
              type="textarea"
              v-model="replyForm.msgThree" resize="none"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex justify-end flex-1">
              <div
                class="cursor-pointer text-center py-1 rounded-lg bg-[#e8edf6] shadow-sm nodrag text-gray-600 basis-1/4"
                @click="addMsg">
                新增回复
              </div>
            </div>
          </el-form-item>
          <el-form-item label="是否启动">
            <el-switch v-model="replyForm.status" size="small" />
          </el-form-item>
          <el-form-item>
            <div class="flex justify-between flex-1">
              <div
                class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-1/4"
                @click="handleClear">
                清空
              </div>
              <div
                class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-2/3"
                @click="handleAdd">
                添加配置数据
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main {
  @apply flex gap-5;
  .section_left {
    @apply basis-1/2 bg-white rounded-lg shadow-lg p-5 flex flex-col gap-5;
    .functonList {
      scroll-behavior: smooth;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .section_right {
    @apply flex flex-col gap-4 flex-1;
    .config {
      @apply h-max bg-white rounded-lg shadow-lg p-5 flex flex-col gap-5;
    }
  }
}
</style>
