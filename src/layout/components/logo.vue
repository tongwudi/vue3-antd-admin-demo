<template>
  <router-link class="logo" to="/" title="桐无敌">
    <img :src="logoSrc" />
    <h1 class="truncate" v-show="showTitle">桐无敌</h1>
  </router-link>
</template>

<script setup>
const logoSrc = require('@/assets/img/logo.png')

defineProps({ showTitle: Boolean })
</script>

<style lang="scss" scoped>
.logo {
  height: $nav-height;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 30px;
  }
  h1 {
    margin-left: 10px;
    color: #fff;
  }
}
</style>
