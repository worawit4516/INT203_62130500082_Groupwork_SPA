import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/basket.vue'
import GameRegistration from '../views/GameRegistration.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/gameregistration',
        name: 'GameRegistration',
        component: GameRegistration
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router