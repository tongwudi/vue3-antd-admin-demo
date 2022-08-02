<template>
  <a-menu
    mode="inline"
    theme="dark"
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
  >
    <a-menu-item key="1">
      <template #icon>
        <PieChartOutlined />
      </template>
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <DesktopOutlined />
      </template>
      <span>Option 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <template #icon>
        <InboxOutlined />
      </template>
      <span>Option 3</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup>
import { ref } from 'vue'
// import {
//   PieChartOutlined,
//   MailOutlined,
//   DesktopOutlined,
//   InboxOutlined,
//   AppstoreOutlined
// } from '@ant-design/icons-vue'

const selectedKeys = ref(['6'])
const openKeys = ref(['sub1'])
</script>

<style lang="scss" scoped></style>
