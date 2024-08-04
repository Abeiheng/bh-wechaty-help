<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Suspense>
    <main class="flex flex-col h-screen bg-[#f3f4fe]">
      <Navbar />
      <RouterView #default="{ Component }">
        <component :is="Component" class="flex-1" />
      </RouterView>
    </main>
  </Suspense>
</template>
