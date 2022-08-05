<template>
  <a-row class="header-left" align="middle">
    <div
      class="collapse-btn hover-effect"
      @click="emit('update:collapsed', !collapsed)"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </div>
    <a-breadcrumb>
      <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
      <a-breadcrumb-item>Button</a-breadcrumb-item>
    </a-breadcrumb>
  </a-row>

  <a-row class="header-right" align="middle">
    <a-dropdown :trigger="['click']" placement="bottom" class="hover-effect">
      <div>
        <a-avatar :size="28" :src="avatarSrc" />
        <span class="dropdown-text">桐无敌</span>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
          <a-menu-item key="4">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <div class="setting-btn hover-effect">
      <SettingOutlined />
    </div>
  </a-row>
</template>

<script setup>
defineProps({
  collapsed: { type: Boolean }
})
const avatarSrc = require('@/assets/img/avatar.png')
// const avatarSrc = 'https://s2.loli.net/2022/04/07/gw1L2Z5sPtS8GIl.gif?imageView2/1/w/80/h/80'

const emit = defineEmits(['update:collapsed'])
</script>

<style lang="scss" scoped>
.header-left {
  height: 100%;
  .collapse-btn {
    width: $nav-height;
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .anticon {
      font-size: 18px;
      color: #000;
    }
  }
}
.header-right {
  height: 100%;
  .ant-dropdown-trigger {
    padding: 0 10px;
    .dropdown-text {
      margin-left: 5px;
    }
  }
  .setting-btn {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .anticon {
      font-size: 18px;
    }
  }
}
</style>
