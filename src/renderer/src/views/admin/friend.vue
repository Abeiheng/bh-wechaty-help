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
    <section>
      <div class="font-bold text-black opacity-80 text-lg">好友申请方案列表</div>
      <div class="overflow-y-auto h-[680px] flex flex-col gap-5 functonList">
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
    <section class="h-max">
      <div class="font-bold text-black opacity-80 text-lg">配置管理</div>
      <el-form>
        <el-form-item label="方案名称">
          <el-input placeholder="请输入方案名称，最好不要重复" v-model="friend.verify"></el-input>
        </el-form-item>
        <el-form-item label="验证消息">
          <el-input placeholder="当验证消息为'XXXX'时自动通过好友申请" v-model="friend.verify"></el-input>
        </el-form-item>
        <el-form-item label="打招呼语">
          <el-input
            placeholder="当好友申请通过自动向该好友发送一条文字消息。(为空则不发送)"
            :rows="5"
            type="textarea"
            v-model="friend.salutation"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="flex justify-between flex-1">
            <div class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-1/4">清空</div>
          <div class="cursor-pointer text-center py-2 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white basis-2/3">添加配置数据</div>
          </div>
        </el-form-item>
      </el-form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main {
  @apply flex gap-5;
  section {
    @apply basis-1/2 bg-white rounded-lg shadow-lg p-5 flex flex-col gap-5;
    .functonList {
      scroll-behavior: smooth;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
