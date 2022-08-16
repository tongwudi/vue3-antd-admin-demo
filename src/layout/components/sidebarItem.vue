<template>
  <a-menu-item
    v-if="hasOnlyChild(menu.children, menu)"
    :key="formatPath(onlyOneChild.path)"
  >
    <template #icon>
      <PieChartOutlined />
    </template>
    <span>{{ onlyOneChild.meta && onlyOneChild.meta.title }}</span>
  </a-menu-item>

  <a-sub-menu v-else :key="menu.path">
    <template #icon>
      <MailOutlined />
    </template>
    <template #title>{{ menu.meta && menu.meta.title }}</template>

    <SidebarItem
      v-for="child in menu.children"
      :key="child.path"
      :menu="child"
      :parent-path="menu.path"
    />
  </a-sub-menu>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  menu: {
    type: Object,
    required: true
  },
  parentPath: {
    type: String
  }
})
const formatPath = path => {
  return path.includes('/')
    ? path
    : props.parentPath == '/'
    ? '/' + path
    : props.parentPath + '/' + path
}

const onlyOneChild = ref()
// 检测是否只有一个子元素
const hasOnlyChild = (children, parent) => {
  if (!children) children = []

  const showChildRoutes = children.filter(v => !v.hidden)

  if (showChildRoutes.length === 1 && parent.meta.noMultilevel) {
    onlyOneChild.value = showChildRoutes[0]
    return true
  }

  if (showChildRoutes.length === 0) {
    onlyOneChild.value = { ...parent }
    return true
  }

  return false
}
</script>

<style lang="scss" scoped></style>
