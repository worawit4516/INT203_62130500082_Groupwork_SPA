import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Nevbar from './components/Nevbar.vue'
const app = createApp(App)
app.component('nevbar', Nevbar)
app.use(router).mount('#app')