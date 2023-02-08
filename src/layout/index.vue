<template>
  <a-layout>
    <a-layout-sider
      v-model:collapsed="collapsed"
      theme="dark"
      :width="220"
      :collapsedWidth="50"
    >
      <Logo :showTitle="!collapsed" />

      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Navbar v-model:collapsed="collapsed" />
      </a-layout-header>
      <a-layout-content>
        <Tabbar />
        <router-view #default="{ Component }">
          <keep-alive>
            <Suspense>
              <component :is="Component"></component>
              <template #fallback>
                <h3>稍等，加载中...</h3>
              </template>
            </Suspense>
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

import Logo from './components/logo.vue'
import Sidebar from './components/sidebar.vue'
import Navbar from './components/navbar.vue'
import Tabbar from './components/tabbar.vue'

const collapsed = ref(false)
const { commit } = useStore()
watch(collapsed, val => {
  commit('app/toggleCollapse', val)
})
</script>

<style lang="scss" scoped>
.ant-layout {
  min-height: 100%;
}
</style>
