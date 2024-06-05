<template>
  <div class="py-[20px] grid md:grid-cols-2 grid-cols-1 gap-3">
    <CCardCharacter
      v-for="(character, index) in characters?.results"
      :key="index"
      :character="character"
      class="w-full h-[220px]"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import CCardCharacter from '@/modules/Character/components/CCardCharacter.vue'
import { ICharacters } from '@/modules/Character/types'

const characters = ref<ICharacters | undefined>()

onMounted(() => {
  try {
    useApi()
      .$get('/character')
      .then((res) => {
        characters.value = res.data
        console.log(res.data)
      })
  } catch (err) {
    console.error(err)
  }
})
</script>
<style scoped></style>
