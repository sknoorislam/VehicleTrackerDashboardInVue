import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// ✅ Leaflet
import 'leaflet/dist/leaflet.css'
import { setupLeafletIcons } from '@/utils/leaflet-setup'

// Initialize Leaflet icons
setupLeafletIcons()


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
