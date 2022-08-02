<template>
  <div class="nav-tabs">
    <a-tabs
      size="small"
      type="editable-card"
      hideAdd
      v-model:activeKey="activeKey"
      :tabBarGutter="7"
      @edit="closeTag"
    >
      <template v-for="pane in panes" :key="pane.key">
        <a-tab-pane :closable="pane.closable" :tab="pane.title" />
      </template>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const activeKey = ref('1')
const panes = ref([
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  { title: 'Tab 3', content: 'Content of Tab 3', key: '3' }
])

// const addTag = () => {
//   activeKey.value = `newTab${++newTabIndex.value}`
//   panes.value.push({
//     title: 'New Tab',
//     content: 'Content of new Tab',
//     key: activeKey.value
//   })
// }

const closeTag = targetKey => {
  let lastIndex = 0
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1
    }
  })
  panes.value = panes.value.filter(pane => pane.key !== targetKey)
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key
    } else {
      activeKey.value = panes.value[0].key
    }
  }
}

watch(panes, val => {
  if (val.length === 1) {
    val[0].closable = false
  }
})
</script>

<style lang="scss" scoped>
.nav-tabs {
  padding: 8px 10px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
}
:deep(.ant-tabs > .ant-tabs-nav) {
  margin: 0;
  &::before {
    border-bottom: 0;
  }
  .ant-tabs-tab {
    padding: 2px 10px !important;
    background: #fff;
    .anticon {
      font-size: 10px;
    }
    &:not(.ant-tabs-tab-active):hover {
      background-color: #ecf5ff;
      color: #1890ff;
      border-color: #b3d8ff;
    }
  }
  .ant-tabs-nav-more {
    padding: 0px 12px;
  }
  .ant-tabs-tab-active {
    background: #1890ff;
    border-bottom-color: #f0f0f0 !important;
    .ant-tabs-tab-btn,
    .ant-tabs-tab-remove {
      color: #fff;
    }
  }
}
</style>
