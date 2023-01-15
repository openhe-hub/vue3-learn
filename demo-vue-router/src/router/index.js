import Home from "../view/Home.vue"
import About from "../view/About.vue"
import Item from "../view/Item.vue";
import NotFound from "../view/NotFound.vue";

import {createRouter, createWebHashHistory} from "vue-router"


const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/item/:id(\\d+)', component: Item},
    // match any url
    {path: '/:path(.*)',component: NotFound}
]

const router = createRouter({
    // history mode: hash mode
    history: createWebHashHistory(),
    // routes table
    routes
})

export default router