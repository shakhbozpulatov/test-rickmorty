<template>
  <div class="flex flex-col gap-3 bg-[#272b33] p-[30px] rounded-2xl text-white">
    <div class="flex items-center gap-3 text-2xl font-bold">
      <p>Location:</p>
      <p>{{ location?.name }}</p>
    </div>
    <div class="flex items-center gap-3 text-2xl font-bold">
      <p>Type:</p>
      <p>{{ location?.type }}</p>
    </div>
    <div class="flex items-center gap-3 text-2xl font-bold">
      <p>Dimension:</p>
      <p>{{ location?.dimension }}</p>
    </div>
    <div class="flex items-center gap-3 text-2xl font-bold">
      <p>Other residents:</p>
      <!--      {{ resident }}-->
      <div class="flex flex-wrap gap-2">
        <div v-for="item in resident">
          <p>{{ item.name }},</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useApi } from '@/composables/useApi.ts'
// import { ICharactersItem } from '@/modules/Character/types'
import { ILocation } from '@/modules/Locations/types'

const route = useRoute()

const location = ref<ILocation>()
const resident = ref([])

const getItemId = (route: string) => {
  const arr = route.split('/')
  return arr[arr.length - 1]
}

onMounted(async () => {
  await useApi()
    .$get(`/location/${route.params.id}`)
    .then((res) => {
      console.log(res.data)
      location.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })

  location.value?.residents.forEach((elem) => {
    useApi()
      .$get(`/character/${getItemId(elem)}`)
      .then((res) => {
        console.log(res.data)
        resident.value?.push(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })
})
</script>
<style scoped></style>
