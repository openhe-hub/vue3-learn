# Vue-3 note 3(Vue Router)
1. 快速入门
   * npm安装：`npm install vue-router@4`
   * Vue Router路由概念：url路径与vue组件的映射
   * demo code
     * `.\view`下添加两个组件`Home.vue`,`About.vue`（view一般存放路由映射的组件，即视图，components存放普通组件）
     * `.\router\index.js`（vue-router核心配置文件），配置路由表规则
        ```js
        import Home from "../view/Home.vue"
        import About from "../view/About.vue"
        import {createRouter, createWebHashHistory} from "vue-router"

        const routes = [
            {path: '/', component: Home},
            {path: '/about', component: About}
        ]

        const router = createRouter({
            // history mode: hash mode
            history: createWebHashHistory(),
            // routes table
            routes
        })

        export default router
        ``` 
     * `main.js`，添加router
        ```js
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from "./router/index.js"

        const app=createApp(App)
        app.use(router)
        app.mount('#app')
        ``` 
     * `App.vue`，添加路由导航界面
        ```html
        <script setup>
        </script>

        <template>
        <div>
            <h1>Hello App!</h1>
            <p>
            <router-link to="/">Go to Home</router-link>
            <br>
            <router-link to="/about">Go to About</router-link>
            </p>
        <!--    component mapped by routes will be rendered here-->
            <router-view></router-view>
        </div>
        </template>

        <style scoped>
        </style>
        ```
2. 路由规则
   1. 带参数的动态路由匹配
      * 动态路由：`xxx/:<param>`
      * demo code: Item组件获取路由中的动态参数
        * `/router/index.js` 
            ```js
            {path: '/item/:id', component: Item}
            ```  
        * `App.vue`
            ```html
            <router-link to="/item/123">Go to Item</router-link>
            ``` 
        * `Item.vue`：注意ref和监听器的使用使id保持响应式
            ```html
            <template>
            <div>
                Item
                <div>{{ id }}</div>
            </div>
            </template>

            <script setup>
            import {useRoute} from "vue-router";
            import {ref, watch} from "vue";

            const route=useRoute();
            const id=ref();
            id.value=route.params.id;

            watch(()=>route.params.id,(newId)=>{
            id.value=newId;
            })
            </script>
            ``` 
   2. 404 Not Found路由配置
      1. 添加一个404页面组件
      2. 添加路由规则
         ```js
         {path: '/:path(.*)',component: NotFound}
         ```
   3. 正则路由
      1. 写法：`xxx/param(regex)`，regex为正则表达式，注意反斜杠的转义
      2. demo code: id为纯数字
         ```js
         {path: '/item/:id(\\d+)', component: Item}
         ``` 
   4. 嵌套路由
3. 命名路由/视图
4. 编程式导航
5. 历史堆栈
6. 导航守卫
7. 路由懒加载