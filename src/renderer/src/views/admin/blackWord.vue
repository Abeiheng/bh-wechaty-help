<script setup lang="ts">
import { ref } from 'vue'
import { Dot, CloseOne, EditTwo } from '@icon-park/vue-next'
import useBlackWord from '@renderer/composables/useBlackWord'
const blackForm = ref({
  planName: '',
  listenRoom: '',
  listenType: [] as Array<string>,
  blackMsg: '',
  status: false,
})
const isEdit = ref(false)
const handleDel = async (id: number) => {
  await deletePlan(id)
}
const handleEdit = async (id: number) => {
  await getPlanById(id)
  isEdit.value = true
}
const handleAdd = async () => {
  await createPlan(blackForm.value)
  handleClear()
}
const handleUpdate = async () => {
  await updatePlan()
  handleClear()
}
const handleClear = () => {
  blackForm.value = {
    planName: '',
    listenRoom: '',
    listenType: [] as Array<string>,
    blackMsg: '',
    status: false,
  }
  isEdit.value = false
}
const { getAllPlanList, planList, createPlan, updatePlan, planInfo, deletePlan, getPlanById } = useBlackWord()
await getAllPlanList()
</script>

<template>
  <main class="main">
    <section class="section_left">
      <div class="font-bold text-black opacity-80 text-lg">屏蔽检测方案列表</div>
      <div class="overflow-y-auto h-[680px] flex flex-col gap-5 functonList">
        <div
          class="rounded-lg shadow-md p-3 bg-zinc-100 flex justify-between items-center"
          v-for="(item, index) of planList"
          :key="index">
          <div class="flex gap-1 items-center">
            <dot theme="outline" size="18" :fill="item.status ? '#67C23A' : '#F56C6C'" />
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
        <el-form v-if="planInfo && isEdit">
          <el-form-item label="方案名称">
            <el-input placeholder="请输入方案名称，最好不要重复" v-model="planInfo.planName"></el-input>
          </el-form-item>
          <el-form-item label="监听群聊">
            <el-input
              placeholder="请输入监听群聊昵称,每个群聊以#分割，如：咨询#请问#询问,群聊昵称禁止有符号"
              :rows="4"
              type="textarea"
              v-model="planInfo.listenRoom"></el-input>
          </el-form-item>
          <el-form-item label="监听条件">
            <el-checkbox-group v-model="planInfo.listenType">
              <el-checkbox value="二维码" name="type">二维码</el-checkbox>
              <el-checkbox value="链接" name="type">链接</el-checkbox>
              <el-checkbox value="手机号" name="type">手机号</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="黑名单词" v-if="planInfo.listenType.includes('黑名单词')">
            <el-input
              placeholder="请输入你监听的黑名单词(使用#分割)"
              :rows="4"
              type="textarea"
              v-model="planInfo.blackMsg"></el-input>
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
                更新配置数据
              </div>
            </div>
          </el-form-item>
        </el-form>
        <el-form v-if="!isEdit">
          <el-form-item label="方案名称">
            <el-input placeholder="请输入方案名称，最好不要重复" v-model="blackForm.planName"></el-input>
          </el-form-item>
          <el-form-item label="监听群聊">
            <el-input
              placeholder="请输入监听群聊昵称,每个群聊以#分割，如：咨询#请问#询问,群聊昵称禁止有符号"
              :rows="4"
              type="textarea"
              v-model="blackForm.listenRoom"></el-input>
          </el-form-item>
          <el-form-item label="监听条件">
            <el-checkbox-group v-model="blackForm.listenType">
              <el-checkbox value="黑名单词" name="type">黑名单词</el-checkbox>
              <el-checkbox value="二维码" name="type">二维码</el-checkbox>
              <el-checkbox value="链接" name="type">链接</el-checkbox>
              <el-checkbox value="手机号" name="type">手机号</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="黑名单词" v-if="blackForm.listenType.includes('黑名单词')">
            <el-input
              placeholder="请输入你监听的黑名单词(使用#分割)"
              :rows="4"
              type="textarea"
              v-model="blackForm.blackMsg"></el-input>
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
      <div class="tip">
        <div class="font-bold text-black opacity-80 text-lg">使用说明</div>
        <p>①：屏蔽检测目前只针对于群聊设置，当群聊有人发送包含屏蔽词的消息时，会自动记录下来，具体日志请看运行日志</p>
        <p>②：屏蔽检测支持黑名单词汇，手机号，图片，链接，可自行定制</p>
        <p>③：如使用本程序出现bug问题，请提交issuse进行提交反馈</p>
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
    .tip {
      @apply flex-1 bg-white rounded-lg shadow-lg p-5 flex flex-col gap-5;
      p {
        @apply text-gray-700 text-sm;
      }
    }
  }
}
</style>
