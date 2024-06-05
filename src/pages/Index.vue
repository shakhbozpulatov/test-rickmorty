<template>
  <div>
    <h1 class="text-2xl font-semibold underline">Tailwind</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { useMainStore } from '@/store'

const store = useMainStore()
const $api = useApi()

const todoData = ref()

async function fetchData() {
  if (todoData.value) return
  try {
    const { data } = await $api.$get('/todos/1')
    todoData.value = data
  } catch {
    alert('Error')
  }
}
</script>
