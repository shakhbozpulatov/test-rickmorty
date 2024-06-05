<template>
  <div class="flex flex-col justify-between items-center">
    <CHeader />
    <div class="container my-3">
      <router-view />
    </div>
    <CFooter />
  </div>
</template>
<script setup lang="ts">
import CFooter from '@/layouts/components/CFooter.vue'
import CHeader from '@/layouts/components/CHeader.vue'
</script>
<style scoped></style>
