import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import ContactCard from './components/ContactCard.vue'
import ProCard from './components/ProCard.vue'
const app = createApp(App)
app.component('contact-card', ContactCard)
app.component('pro-card', ProCard)
app.use(router)
app.mount('#app')
