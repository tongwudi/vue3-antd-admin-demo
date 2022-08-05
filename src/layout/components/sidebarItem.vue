<template>
  <a-menu-item
    v-if="hasOnlyChild(item.children, item)"
    :key="formatPath(item.path)"
  >
    <template #icon>
      <PieChartOutlined />
    </template>
    <router-link :to="formatPath(onlyOneChild.path)">
      {{ onlyOneChild.meta && onlyOneChild.meta.title }}
    </router-link>
  </a-menu-item>

  <a-sub-menu v-else :key="item.path">
    <template #icon>
      <MailOutlined />
    </template>
    <template #title>{{ item.meta && item.meta.title }}</template>

    <SidebarItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :parent-path="item.path"
    />
  </a-sub-menu>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
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
