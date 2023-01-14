# Vue note 2
1. 组件基础与使用
   1. 定义一个组件三要素：`template`,`script`,`style`
   2. 使用
      1. `script`下导入组件
      2. 在`components`属性下注册组件
      3. `template`下使用，同html标签
   3. demo code
      * Child.vue
      ```html
      <template>
        <div id="container">
            <h2>this is son component</h2>
        </div>
        </template>

        <script>
        export default {
            name: "Child",
        }
        </script>

        <style scoped>
        #container{
            border: 1px solid black;
            background-color: cyan;
        }
        </style>
      ``` 
      * Content.vue
      ```html
      <template>
        <div id="container">
            <h2>This is the content of a component</h2>
            <Child></Child>
        </div>
        </template>

        <script>
        import Child from "./Child.vue";
        export default {
            name: "Content",
            components:{
                Child
            }
        }
        </script>

        <style scoped>
        #container{
            border: 1px solid black;
            padding: 5px;
        }
        </style>
      ```
2. 组件通信
   1. 父传子: 通过`props`
      * 步骤
        1. 父组件使用（类似于属性)
        2. 子组件接收props
        3. 子组件使用props
      * demo code  
        * Child.vue
        ```html
        <template>
            <div id="container">
                <h2>this is son component</h2>
                <h2>message from father component:{{ message }}</h2>
                <div>{{list}}</div>
            </div>
        </template>

        <script>
        export default {
            name: "Child",
            props: {
                message: {
                type: String,
                default: "hello world"
                },
                list:{
                type:Array,
                default(){
                    return [1,2,3]
                }
                }
            }
        }
        </script>

        <style scoped>
        #container {
            border: 1px solid black;
            background-color: cyan;
        }
        </style>
        ``` 
        * Content.vue 
        ```html
        <template>
            <div id="container">
                <h2>This is the content of a component</h2>
                <Child :message="msg"></Child>
            </div>
        </template>

        <script>
        import Child from "./Child.vue";
            export default {
            name: "Content",
            data(){
                return{
                msg:"hello world",
                list:[1,2,3,4]
                }
            },
            components:{
                Child
            }
        }
        </script>

        <style scoped>
        #container{
            border: 1px solid black;
            padding: 5px;
        }
        </style>
        ``` 
      * props验证
        1. 类型：Number,Boolean,Array,Object,String, e.g. `type: String`
        2. 初始值
           1. `default: xxx`
           2. 对象和数组应该使用工厂模式返回初始值 
        3. 是否是必写属性：`require: true`
      * props注意事项
        4. props是单项数据流，父组件改变导致子组件变化，子组件变化不能导致父组件变化
        5. props应该是只读的 

   2. 子传父: 自定义事件
      * 步骤:
        1. 使用`$emit`自定义事件，并发送数据
        2. 父组件监听自定义事件
        3. 父组件使用事件处理，接收数据 
      * demo code 
        * Child.vue
        ```html
        <template>
          <div id="container">
              <h2>this is son component</h2>
          </div>
          </template>

          <script>
          export default {
              name: "Child",
          }
          </script>

          <style scoped>
          #container{
              border: 1px solid black;
              background-color: cyan;
          }
          </style>
        ``` 
        * Content.vue
        ```html
        <template>
          <div id="container">
              <h2>This is the content of a component</h2>
              <Child></Child>
          </div>
          </template>

          <script>
          import Child from "./Child.vue";
          export default {
              name: "Content",
              components:{
                  Child
              }
          }
          </script>

          <style scoped>
          #container{
              border: 1px solid black;
              padding: 5px;
          }
          </style>
        ```
    3. 父组件访问子组件：`$refs`
       1. ref属性可视为组件的回调钩子id
        ```html
        <Child :message="msg" @send="receive" ref="hello"></Child>
        ```
       2. 获取
       ```js
       this.$refs.hello
       ``` 
    4. 子组件访问父组件：`$parent`
    5. 子组件访问根组件：`$root`
3. 插槽
4. 生命周期
5. Vue3-组合式api

      