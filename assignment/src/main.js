import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Nevbar from './components/Nevbar.vue'
import BG_img from './components/Background_img.vue'
import GameForm from './components/GameForm.vue'
import FlexForm from './components/FlexForm.vue'
const app = createApp(App)
app.component('nevbar', Nevbar)
app.component('bg-img', BG_img)
app.component('gameform', GameForm)
app.component('flexform', FlexForm)
app.use(router).mount('#app')