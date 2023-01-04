import { createApp } from 'vue'
import { createPinia } from "pinia";
import i18n from "./i18n";
import router from "./router";
import './style.css'
import App from './App.vue'

import 'element-plus/es/components/notification/style/css'

const pinia = createPinia();
createApp(App).use(i18n).use(router).use(pinia).mount('#app')
