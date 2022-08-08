import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import '@/assets/styles/index.scss'
import '@/router/permission'

const app = createApp(App)

import * as Icons from '@ant-design/icons-vue'
const data = Icons
for (const i in data) {
  app.component(i, data[i])
}

app.use(router).use(store).use(Antd).mount('#app')
