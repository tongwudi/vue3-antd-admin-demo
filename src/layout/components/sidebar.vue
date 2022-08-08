<template>
  <a-menu
    mode="inline"
    theme="dark"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="handleClickMenu"
    @openChange="openChangeMenu"
  >
    <template v-for="route in routes.filter(i => !i.hidden)" :key="route.path">
      <SidebarItem :item="route" :parent-path="route.path" />
    </template>
  </a-menu>
</template>

<script setup>
import { ref, computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import SidebarItem from './sidebarItem.vue'
import { setLocal } from '@/utils/storage'

const { state } = useStore()
const routes = computed(() => state.permission.routes)
// const { options } = useRouter()
// const routes = options.routes

const openKeys = ref(JSON.parse(localStorage.getItem('openKeys')) || [])
const selectedKeys = ref(
  [JSON.parse(localStorage.getItem('selectedKeys'))] || []
)

const openChangeMenu = openKeys => {
  setLocal('openKeys', openKeys)
}

const handleClickMenu = ({ key }) => {
  setLocal('selectedKeys', key)
}
</script>

<style lang="scss" scoped></style>
