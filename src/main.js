import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'aframe'
import 'super-hands'
import 'aframe-extras/src/controls'
import 'aframe-sun-sky'
import 'aframe-extras.grid'
import '@/assets/scss/styles.scss'
// import '@/aframe/register-components.js'
import '@/components/aframe/components/components.js'

createApp(App).use(store).use(router).mount('#app')
