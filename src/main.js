import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'aframe'
import 'aframe-extras.grid'
import '@/assets/scss/styles.scss'
// import '@/aframe/register-components.js'
import '@/components/aframe/components/components.js'

createApp(App).use(store).use(router).mount('#app')
