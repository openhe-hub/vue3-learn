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
   1. 插槽:通过占位符实现父组件向子组件注入内容，提高子组件复用性
       * 子组件
       ```html
       <template>
        <div id="container">
            <slot></slot>
        </div>
       </template>
       ``` 
       * 父组件
       ```html
       <template>
        <div id="container">
            <Son>
            <button>click me</button>
            </Son>
            <Son>
            <p>click me</p>
            </Son>
        </div>
       </template>
       ``` 
   2. 具名插槽（通过`name`属性匹配多个插槽）
       * 子组件：指定slot标签的`name`
       ```html
       <template>
        <div id="container">
            <slot name="header"></slot>
            <slot name="footer"></slot>
        </div>
       </template>
       ``` 
       * 父组件：使用template标签包裹插槽内容，指定`v-slot:name`
       ```html
       <template>
        <div id="container">
            <Son>
            <template v-slot:header>
                <button>click me</button>
            </template>
            <template v-slot:footer>
                <p>click me</p>
            </template>
            </Son>
        </div>
       </template>
       ```  
    3. 插槽的数据作用域：父组件
    4. 插槽备用内容：插槽的默认值
       * 在slot标签内写默认内容即可
       ```html
       <button>
        <slot name="btn">
            default
        </slot>
       </button>
       ```  
    5. 作用域插槽：使用子组件的数据
       1. 子组件定义`:slotProps=xxx`
       ```html
       <slot name="list" :list="list"></slot>
       ``` 
       3. 父组件通过`slotProps.obj`接收
       ```html
       <template v-slot:list="slotProps">
        <div>{{slotProps}}</div>
        <ul>
          <li v-for="num in slotProps.list">{{num}}</li>
        </ul>
      </template>
       ```
4. 生命周期
   1. vue的生命周期
   2. 生命周期回调函数
5. Vue3-组合式api

      