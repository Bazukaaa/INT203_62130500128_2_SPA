import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseCard from './components/BaseCard.vue'
import ProCard from './components/ProCard.vue'
const app = createApp(App)
app.component('base-card', BaseCard)
app.component('pro-card', ProCard)
app.use(router)
app.mount('#app')
