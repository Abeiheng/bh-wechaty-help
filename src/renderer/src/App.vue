<script setup lang="ts"></script>

<template>
  <Suspense>
    <main class="flex flex-col h-screen">
      <RouterView #default="{ Component }">
        <component :is="Component" class="flex-1 drag" />
      </RouterView>
    </main>
  </Suspense>
</template>
