<template>
  <a-layout>
    <a-layout-sider
      theme="dark"
      breakpoint="lg"
      :width="220"
      v-model:collapsed="collapsed"
      :collapsedWidth="collapsedWidth"
      :trigger="null"
      @breakpoint="onBreakpoint"
    >
      <Logo :showTitle="!collapsed" />

      <Sidebar />
    </a-layout-sider>
    <a-layout
      class="main"
      :style="{ marginLeft: (collapsed ? collapsedWidth : 220) + 'px' }"
    >
      <a-layout-header>
        <Navbar @toggleCollapse="toggleCollapse" />
      </a-layout-header>
      <a-layout-content>
        <Tabbar />
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import Logo from './components/logo.vue'
import Sidebar from './components/sidebar.vue'
import Navbar from './components/navbar.vue'
import Tabbar from './components/tabbar.vue'

const collapsed = ref(false)
const brokenRef = ref()
const { commit } = useStore()

const onBreakpoint = broken => {
  brokenRef.value = broken
}

const collapsedWidth = computed(() => {
  return brokenRef.value ? 0 : 50
})

const toggleCollapse = () => {
  collapsed.value = !collapsed.value
  commit('app/toggleCollapse', collapsed.value)
}
</script>

<style lang="scss" scoped>
.ant-layout {
  min-height: 100%;
}
.ant-layout-sider {
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.main {
  transition: all 0.2s;
}
</style>
