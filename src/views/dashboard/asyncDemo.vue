<template>
  <div>{{ text }}</div>
</template>

<script async setup>
import { ref } from 'vue'
const text = ref('今天天气不错')

let p = new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 3000)
})

await p
</script>

<style lang="scss" scoped></style>
