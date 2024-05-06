import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'aframe'
import 'aframe-extras/src/controls'
import 'aframe-sun-sky'
import 'aframe-extras.grid'
import '@/assets/scss/styles.scss'
// import '@/components/aframe/components/hand-tracking-controls-extras-full.js'
import '@/components/aframe/components/components.js'
import '@/components/aframe/components/hands.js'

createApp(App).use(store).use(router).mount('#app')
