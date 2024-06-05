<template>
  <div class="flex rounded-2xl overflow-hidden w-full">
    <div class="w-[40%]">
      <img :src="props.character.image" alt="" />
    </div>
    <div class="bg-[#3b3e43] p-3 text-white w-[60%] flex flex-col gap-3">
      <div>
        <router-link :to="`/character`">
          <p class="text-2xl hover:text-[#fb9603]">
            {{ props.character.name }}
          </p>
        </router-link>

        <div class="flex items-center gap-2">
          <p>{{ props.character.status }}</p>
          <p>-</p>
          <p>{{ props.character.species }}</p>
        </div>
      </div>
      <div>
        <p class="text-xl">Last known location:</p>
        <div class="flex items-center gap-2">
          <router-link :to="`/locations/${getLocationId(props.character.url)}`">
            <p class="hover:text-[#fb9603]">
              {{ props.character.location.name }}
            </p>
          </router-link>
        </div>
      </div>
      <div>
        <p class="text-xl">First seen in:</p>
        <div class="flex items-center gap-2">
          <p>{{ props.character.origin.name }}</p>
        </div>
      </div>

      <!--      {{ props.character }}-->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ICharactersItem } from '@/modules/Character/types'

interface Props {
  character: ICharactersItem
}

const props = defineProps<Props>()

const getLocationId = (route: string) => {
  const arr = route.split('/')
  return arr[arr.length - 1]
}
</script>
<style scoped></style>
