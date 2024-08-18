import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      userToken: '',
    })
    return { config }
  },
  { persist: true },
)
