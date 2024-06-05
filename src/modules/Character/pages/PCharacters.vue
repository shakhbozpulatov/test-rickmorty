<template>
  <div class="flex items-center justify-end gap-3">
    <el-select
      v-model="filterOptions.status"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in statuses"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="filterOptions.name"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in allNames"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button size="large" type="primary" @click="filterBtn">Submit</el-button>
    <el-button size="large" type="primary" class="!ml-0" @click="resetBtn"
      >Reset</el-button
    >
  </div>
  <div
    v-if="characters"
    class="py-[20px] grid md:grid-cols-2 grid-cols-1 gap-3"
  >
    <CCardCharacter
      v-for="(character, index) in characters?.results"
      :key="index"
      :character="character"
      class="w-full h-[220px]"
    />
    <el-pagination
      class="flex items-center justify-end my-4"
      background
      layout="prev, pager, next"
      v-model:current-page="page"
      :page-count="characters.info.pages"
      @change="paginBtn"
    />
  </div>
  <div class="my-5" v-else>
    <el-alert
      :closable="false"
      title="Not found anything"
      type="info"
      effect="dark"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import CCardCharacter from '@/modules/Character/components/CCardCharacter.vue'
import { ICharacters } from '@/modules/Character/types'

interface IAllNames {
  label: string
  value: string
}
const characters = ref<ICharacters | null>()
const allNames = ref<IAllNames[]>()
const page = ref(1)
const statuses = ref([
  {
    label: 'Dead',
    value: 'dead',
  },
  {
    label: 'Alive',
    value: 'alive',
  },
  {
    label: 'Unknown',
    value: 'unknown',
  },
])
const filterOptions = reactive({
  name: '',
  status: '',
})

const filterBtn = async () => {
  characters.value = null
  await useApi()
    .$get(
      `/character?name=${filterOptions.name}&status=${filterOptions.status}`,
    )
    .then((res) => {
      console.log(res.data)
      characters.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      if (!characters.value) characters.value = null
    })
}
const resetBtn = async () => {
  await useApi()
    .$get('/character')
    .then((res) => {
      console.log(res.data)
      characters.value = res.data
      filterOptions.name = ''
      filterOptions.status = ''
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      if (!characters.value) characters.value = null
    })
}
const paginBtn = async () => {
  await useApi()
    .$get(`/character?page=${page.value}`)
    .then((res) => {
      console.log(res.data)
      characters.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(async () => {
  try {
    await useApi()
      .$get('/character')
      .then((res) => {
        characters.value = res.data
        console.log(res.data)
      })

    allNames.value = characters.value?.results.map((el) => {
      return {
        label: el.name,
        value: el.name,
      }
    })
  } catch (err) {
    console.error(err)
  }
})
</script>
<style scoped></style>
