<template>
  <a-menu
    mode="inline"
    theme="dark"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="handleClickMenu"
    @openChange="openChangeMenu"
  >
    <template v-for="menu in menus">
      <SidebarItem :menu="menu" :parent-path="menu.path" />
    </template>
  </a-menu>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { setLocal } from '@/utils/storage'
import SidebarItem from './sidebarItem.vue'

export default {
  components: { SidebarItem },
  setup() {
    const openKeys = ref(JSON.parse(localStorage.getItem('openKeys')) || [])
    const selectedKeys = ref(
      [JSON.parse(localStorage.getItem('selectedKeys'))] || []
    )

    const { state } = useStore()
    const menus = computed(() => {
      return state.permission.routes.filter(i => !i.hidden)
    })

    const router = useRouter()
    const currentRoute = useRoute()

    const openChangeMenu = openKeys => {
      setLocal('openKeys', openKeys)
    }

    const handleClickMenu = ({ key }) => {
      console.log(key)
      if (key === currentRoute.path) return

      if (/http(s)?:/.test(key)) {
        window.open(key)
      } else {
        router.push({ path: key })
      }
      setLocal('selectedKeys', key)
    }

    return {
      openKeys,
      selectedKeys,
      menus,
      openChangeMenu,
      handleClickMenu
    }
  }
}
</script>

<style lang="scss" scoped></style>
