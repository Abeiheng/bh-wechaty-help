<script setup lang="ts"></script>

<template>
  <main class="main">
    <section>
      <div class="title">
        <span>北恒帮帮助手</span>
      </div>
      <div class="content">
        <div class="leftContent">
          <div class="flex justify-center items-center">
            <span class="text-xl text-gray-700">产品使用说明</span>
          </div>
          <div class="flex flex-col gap-4">
            <p>
              ①：本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。所造成的一切后果由使用的个人或组织承担，与本项目无关。
            </p>
            <p>
              ②：本项目中涉及的第三方硬件、软件等，与本项目没有任何直接或间接的关系。本项目仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本项目无关。
            </p>
            <p>
              ③：本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。
            </p>
            <p>
              ④：所有基于本项目源代码，进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。
            </p>
            <p>
              ⑤：所有直接或间接使用本项目的个人和组织，应24小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。
            </p>
            <p>
              ⑥：本项目保留随时对免责声明进行补充或更改的权利，直接或间接使用本项目内容的个人或组织，视为接受本项目的特别声明。
            </p>
          </div>
        </div>
        <div class="rightContent">
          <div class="flex justify-center items-center">
            <span class="text-xl text-gray-700">控制面板</span>
          </div>
          <div class="flex gap-4 bg-zinc-200 rounded-lg p-4 border-soild">
            <img src="@renderer/public/logo.jpg" class="w-20 h-20 rounded-full" draggable="false" />
            <div class="flex flex-col justify-around">
              <span>用户名：微信助手</span>
              <span>登录时间：2024-02-12 12:23:34</span>
            </div>
          </div>
          <div
            class="cursor-pointer text-center py-3 rounded-lg bg-[#3a404b] shadow-sm nodrag text-white">
            登录账号
          </div>
          <img src="@renderer/public/logo.jpg" class="rounded-lg h-auto"  draggable="false"/>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.main {
  @apply flex;
  section {
    @apply bg-white rounded-lg flex-1 flex flex-col pt-5 gap-8 px-8;
    .title {
      @apply flex justify-center items-center;
      span {
        @apply text-2xl font-bold text-gray-900 opacity-70;
      }
    }
    .content {
      @apply flex-1 flex gap-9;
      .leftContent {
        @apply flex flex-col gap-4 basis-1/2;
      }
      .rightContent {
        @apply basis-1/2 flex flex-col gap-4;
      }
    }
  }
}
</style>
