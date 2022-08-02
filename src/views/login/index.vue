<template>
  <div class="login">
    <a-card>
      <h1 class="login-title">Welcome</h1>

      <a-form
        name="loginForm"
        :model="formState"
        :rules="loginRules"
        @finish="onFinish"
      >
        <a-form-item name="username">
          <a-input
            v-model:value="formState.username"
            size="large"
            :maxlength="25"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password">
          <a-input-password
            v-model:value="formState.password"
            size="large"
            :maxlength="20"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-row justify="space-between">
          <a-form-item name="remember">
            <a-checkbox v-model:checked="formState.remember">
              记住密码
            </a-checkbox>
          </a-form-item>
          <a-button type="link" size="small">忘记密码？</a-button>
        </a-row>

        <a-form-item>
          <a-button type="primary" block html-type="submit" size="large">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { login } from '@/api/index'
// import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

const formState = reactive({
  username: '',
  password: '',
  remember: false
})

const loginRules = {
  username: [{ required: true, message: '请输入账号' }],
  password: [{ required: true, message: '请输入密码' }]
}

const router = useRouter()
const store = useStore()
const onFinish = async values => {
  login(values).then(res => {
    if (res.code === 200) {
      store.commit('permission/setToken', res.data.token)
      router.replace('/')
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  &-title {
    text-align: center;
    margin-bottom: 30px;
  }
}

.ant-card {
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  :deep &-body {
    padding: 30px 40px;
  }
}
</style>
