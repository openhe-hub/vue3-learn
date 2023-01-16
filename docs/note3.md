# Vue-3 Note 3 (Vue Router)
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
      3. 路由正则示例
         1. `/item/:id+`： 1-多个重复路由
         2. `/item/:id*`： 0-多个重复路由
         3. `/item/:id(\\d+)+`：1-多个重复数字路由 
         4. `/item/:id?`：可选参数 
   4. 嵌套路由
      1. demo code
      2. 在`/view`下准备User组件，`/components/user`准备User的两个子组件：Post和Profile
      3. 路由配置
        ```js
        {
            path: '/user',
            component: User,
            children:[
                {
                    path:'profile',
                    component: Profile,
                },
                {
                    path: 'post',
                    component: Post
                }
            ]
        },
        ``` 
      4. 一级路由`App.vue`
        ```html
        <router-link to="/user">Go to User</router-link>
        ``` 
      5. 二级路由`User.vue`
        ```html
        <template>
        <div>
            This is user page.
            <router-link to="/user/profile">Go to Profile</router-link>
            <router-link to="/user/post">Go to Post</router-link>
            <router-view></router-view>
        </div>
        </template>
        ``` 
3. 编程式导航
   1. 导航到不同位置（在历史堆栈中添加新纪录）：`router.push`
        ```js
        // 字符串路径
        router.push('/users/eduardo')

        // 带有路径的对象
        router.push({ path: '/users/eduardo' })

        // 命名的路由，并加上参数，让路由建立 url
        router.push({ name: 'user', params: { username: 'eduardo' } })

        // 带查询参数，结果是 /register?plan=private
        router.push({ path: '/register', query: { plan: 'private' } })

        // 带 hash，结果是 /about#team
        router.push({ path: '/about', hash: '#team' })
        ``` 
   2. 替换当前位置（不会在历史堆栈中添加新纪录）：`router.replace`
   3. 导航到历史位置：`router.go`（正数前进，负数后退）
   4. demo code
      ```html
      <template>
        <div>
            This is user page.
            <br>
            <router-link to="/user/profile">Go to Profile</router-link>
            <br>
            <router-link to="/user/post">Go to Post</router-link>
            <router-view></router-view>
            <hr>

            <button @click="changePage">changePage</button>
            <br>
            <button @click="replacePage">replacePage</button>
            <br>
            <button @click="toHistory">toHistory</button>
            <br>
        </div>
      </template>

      <script setup>
        import Post from "../components/user/Post.vue";
        import Profile from "../components/user/Profile.vue";
        import {useRouter} from "vue-router";

        const router=useRouter();

        const changePage=()=>{
            const itemId=123;
            router.push(`/item/${itemId}`);
        }

        const replacePage=()=>{
            const itemId=123;
            router.replace(`/item/${itemId}`);
        }

        const toHistory=()=>{
            router.go(1);
            alert('next');
            router.go(-2);
        }
      </script>
      ``` 
4. 命名路由
   1. 为什么命名路由：url过于复杂，同时有编码问题，使用`name`起别名更便捷
   2. demo code：改写前面item的例子
      1. 路由配置
        ```js
        {path: '/item/:id(\\d+)',name:'item', component: Item}
        ``` 
      2. `App.vue`
        ```html
        <router-link :to="{name:'item',params:{id:124}}">Go to Item 124</router-link>
        ``` 
      3. 对比
        ```html
        <router-link to="/item/124">Go to Item 124</router-link>
        ```   
5. 命名视图：多个视图出口
   1. 注意
      1. 多个视图属性应写为`components`对象，key为视图名字，value为组件
      2. 默认视图名字为`default`
   2. demo code：改写前面user例子，使`/user/profile`下有两个路由视图出口
      1. 路由配置
          ```js
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
                ]
            },
          ```
      2. 组件  
            ```html
            <router-link to="/user/profile">Go to Profile</router-link>
            <router-link to="/user/post">Go to Post</router-link>

            <router-view></router-view>
            <router-view name="other"></router-view>
            ```    
6. 重定向和别名
   1. 重定向：将`/home`重定向到`/`
   ```js
   const routes = [{ path: '/home',component: Homepage, redirect: '/' }]
   ``` 
   3. 别名：访问`/home`，url不变，但是匹配到`/`
   ```js
   const routes = [{ path: '/', component: Homepage, alias: '/home' }]
   ``` 
7. 历史记录模式
   1. Hash模式(默认)：使用url的hash模拟完整url，实际上url变化，页面不会重新加载。原理：监听hashChange事件，查询路由表进行组件替换
      ```js
      history: createWebHashHistory()
      ``` 
   2. Html5模式：没有url中的哈希字符`#`，但是需要服务器一定的配置（**待更新**)。因为使用html5新特性pushState和replaceState，将url替换而不刷新，没有实际的http请求，一旦刷新，会报404
      ```js
      history: createWebHistory()
      ``` 
8. 导航守卫
   1. 全局前置守卫
        * 可以返回false（不放行），或者一个重定向url
        ```js
        // add navigation guide
        router.beforeEach((to,from)=>{
            console.log(to);
            console.log(from);
        })
        ```
   2. 独享路由守卫
        * e.g. 为`/user`添加用户登录验证 
        ```js
        beforeEnter:(to,from,next)=>{
            if(!isLogin()){
                // redirect to login page
                return {path:'/login'};
            }else{
                // pass
                return true;
            }
        }
        ```
    3. 组件内守卫  
       ```js
        beforeRouteEnter(to, from) {
            // 在渲染该组件的对应路由被验证前调用
            // 不能获取组件实例 `this` ！
            // 因为当守卫执行时，组件实例还没被创建！
        },
        beforeRouteUpdate(to, from) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
            // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
        },
        beforeRouteLeave(to, from) {
            // 在导航离开渲染该组件的对应路由时调用
            // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
        },
       ```   
       Vue3使用setup语法糖，改为使用`onBeforeRouteUpdate`，`onBeforeRouteLeave` 