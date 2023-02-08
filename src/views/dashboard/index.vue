<template>
  <div>dashboard</div>
  <AsyncDemo />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const AsyncDemo = defineAsyncComponent({
  loader: () => import('./asyncDemo.vue'),
  suspensible: true
})
console.log(1)
</script>

<style scoped></style>
