<script setup lang="ts">
import { reactive } from 'vue'
import { Dot, CloseOne, EditTwo } from '@icon-park/vue-next'

const friend = reactive({
  verify: '',
  salutation: '',
})
</script>

<template>
  <main class="main">
    <section class="section_left">
      <div class="font-bold text-black opacity-80 text-lg">消息转发方案列表</div>
      <div class="overflow-y-auto h-[780px] flex flex-col gap-5 functonList">
        <div
          class="rounded-lg shadow-md p-3 bg-zinc-100 flex justify-between items-center"
          v-for="(item, index) of 40"
          :key="index">
          <div class="flex gap-1 items-center">
            <dot theme="outline" size="18" fill="#67C23A" />
            <span class="text-gray-800 opacity-80">方案{{ index + 1 }}</span>
          </div>
          <div class="flex items-center gap-3">
            <edit-two theme="outline" size="18" fill="#409EFF" class="cursor-pointer" />
            <close-one theme="outline" size="18" fill="#F56C6C" class="cursor-pointer" />
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
        <el-form>
          <el-form-item label="方案名称">
            <el-input placeholder="请输入方案名称，最好不要重复" v-model="friend.verify"></el-input>
          </el-form-item>
          <el-form-item label="监听群聊">
            <el-input
              placeholder="请输入监听群聊昵称,每个群聊以#分割，如：咨询#请问#询问,群聊昵称禁止有符号，禁止套娃转发，以防封禁"
              :rows="4"
              type="textarea"
              v-model="friend.salutation"></el-input>
          </el-form-item>
          <el-form-item label="接收群聊">
            <el-input
              placeholder="请输入接收群聊昵称,每个群聊以#分割，如：咨询#请问#询问,群聊昵称禁止有符号，禁止套娃转发，以防封禁"
              :rows="4"
              type="textarea"
              v-model="friend.salutation"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex justify-between flex-1">
              <div
                class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-1/4">
                清空
              </div>
              <div
                class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-2/3">
                添加配置数据
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="tip">
        <div class="font-bold text-black opacity-80 text-lg">使用说明</div>
        <p>①：消息转发，当监听群聊有人发送信息会自动推送到接收群聊(图片+文本)，目前支持多群聊转发多群聊，套娃可能触发死循环导致微信被封禁</p>
        <p>②：本配置是消息转发</p>
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
