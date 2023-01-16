import Home from "../view/Home.vue"
import About from "../view/About.vue"
import Item from "../view/Item.vue";
import User from "../view/User.vue"
import NotFound from "../view/NotFound.vue";
import Profile from "../components/user/Profile.vue";
import Post from "../components/user/Post.vue";

import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
import ProfileB from "../components/user/ProfileB.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/item/:id(\\d+)', name: 'item', component: Item},
    // {path: '/item/:id+', component: Item},
    // {path: '/item/:id*', component: Item},

    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'profile',
                components: {
                    default: Profile,
                    other: ProfileB
                },
            },
            {
                path: 'post',
                component: Post
            }
        ],
        beforeEnter: (to, from) => {
            // write some judge
            if(1===1){
                return true;
            }else{
                return {path:'/about'};
            }
        }
    },

    // 404 page: match any urls left
    {path: '/:path(.*)', component: NotFound}
]

const router = createRouter({
    // history mode: hash mode
    history: createWebHashHistory(),
    // routes table
    routes
})

// add navigation guide
router.beforeEach((to, from) => {
    console.log(to);
    console.log(from);
})

export default router