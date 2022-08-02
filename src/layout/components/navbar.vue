<template>
  <a-row class="navbar" align="middle">
    <div class="collapse-trigger hover-effect" @click="toggleCollapse">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </div>
    <a-breadcrumb>
      <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Component</a></a-breadcrumb-item>
      <a-breadcrumb-item>
        <a href="">General</a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
                >General</a
              >
            </a-menu-item>
            <a-menu-item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
                >Layout</a
              >
            </a-menu-item>
            <a-menu-item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
                >Navigation</a
              >
            </a-menu-item>
          </a-menu>
        </template>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Button</a-breadcrumb-item>
    </a-breadcrumb>
  </a-row>

  <a-dropdown class="dropdown-trigger hover-effect">
    <div>
      <a-avatar :src="avatarSrc" />
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
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UserOutlined
// } from '@ant-design/icons-vue'

export default {
  emits: ['toggleCollapse'],
  setup(props, { emit }) {
    // const avatarSrc = require('@/assets/img/avatar.png')
    const avatarSrc =
      'https://s2.loli.net/2022/04/07/gw1L2Z5sPtS8GIl.gif?imageView2/1/w/80/h/80'

    const { state } = useStore()
    const { collapsed } = computed(() => state.app)

    const toggleCollapse = () => {
      emit('toggleCollapse')
    }

    return {
      avatarSrc,
      collapsed,
      toggleCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
}
.collapse-trigger {
  width: $nav-height;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .anticon {
    font-size: 16px;
    color: #000;
  }
}
.dropdown-trigger {
  height: 100%;
  display: flex;
  align-items: center;
  .dropdown-text {
    margin-left: 8px;
    vertical-align: middle;
  }
}
.collapse-trigger,
// .ant-breadcrumb,
.dropdown-trigger {
  padding: 0 10px;
}
</style>
