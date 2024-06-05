<template>
  <div
    class="flex justify-between bg-[#272b33] p-[30px] rounded-2xl text-white"
  >
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3 text-2xl font-bold">
        <p>Name:</p>
        <p>{{ character?.name }}</p>
      </div>
      <div class="flex items-center gap-3 text-2xl font-bold">
        <p>Status:</p>
        <p>{{ character?.status }}</p>
      </div>
      <div class="flex items-center gap-3 text-2xl font-bold">
        <p>Species:</p>
        <p>{{ character?.species }}</p>
      </div>
      <div class="flex items-center gap-3 text-2xl font-bold">
        <p>Gender:</p>
        <p>{{ character?.gender }}</p>
      </div>
    </div>
    <div class="flex items-center gap-3 text-2xl font-bold">
      <img :src="character?.image" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useApi } from '@/composables/useApi.ts'
import { ICharactersItem } from '@/modules/Character/types'

const route = useRoute()
const character = ref<ICharactersItem>()

onMounted(async () => {
  await useApi()
    .$get(`/character/${route.params.id}`)
    .then((res) => {
      console.log(res.data)
      character.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>
