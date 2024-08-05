<script setup lang="ts">
import config from '@renderer/config'
</script>

<template>
  <div class="main">
    <img src="@renderer/assets/logo.jpg" class="logo" draggable="false"/>
    <div class="menuList">
      <div
        class="item"
        :class="{ active: route.routeName == $route.name }"
        v-for="(route, index) in config.member.menu"
        @click="$router.push(route.routeName)"
        :key="index">
        <span class="itemTtitle">{{ route.title }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  @apply flex flex-col  gap-8;
  .logo {
    @apply w-[100px] h-[100px] rounded-md;
  }
  .menuList {
    @apply flex flex-col gap-6;
    .item {
      @apply shadow-md bg-white flex py-3 justify-center rounded-md;
      .itemTitle {
        @apply text-sm text-gray-700;
      }
    }
    .active {
      @apply bg-zinc-200;
    }
  }
}
</style>
