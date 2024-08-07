<script setup lang="ts">
import leftMenu from '@renderer/layouts/admin/leftMenu.vue'
</script>

<template>
  <main class="flex py-2 px-6 gap-5 w-screen flex-1">
    <leftMenu />
    <router-view #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath" class="flex-1"/>
    </router-view>
  </main>
</template>
