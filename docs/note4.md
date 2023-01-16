# Vue-3 Note 4 (Axios)
1. 安装：`npm install axios` 
2. 使用
   1. 创建axios实例
        ```js
        import axios from "axios";

        const api=axios.create({
            baseURL: '<your-base-url>',
            timeout: 5000
        })

        export default api;
        ``` 
   2. 全局配置axios
        ```js
        const app = createApp(App);
        app.mount('#app');
        app.config.globalProperties.$axios = api;
        ``` 
   3. 使用：e.g. get请求一个json对象
        ```js
        let user=reactive({name:""});
        const getObj=()=>{
        api({
                url:'/obj',
                method:'get'
            }).then(resp=>{
                console.log(resp);
                user.name=resp.data.user.name;
            }).catch(err=>{
                console.log(err);
            })
        }
        ``` 

