# Vue-3 Note 1
1. Vue的特性
   1. 数据驱动视图
   2. 双向数据绑定
   3. MVVM=Model(js obj)+View(dom)+ViewModel(Vue)
2. Vue 3 vs Vue 2
   1. 组合式api
   2. 多根节点组件
   3. TS支持
   4. Vue3组件可以有多个根元素
3. 使用Vite快速搭建Vue3
   ```bash
   npm create vite@latest demo-startup -- --template vue
   cd demo-startup
   npm install
   npm run dev
   ```
4. 一个简单的组件demo
   ```html
   <script>
   export default{
      data(){
         return{
            num:0,
            username:"openhe"
         }
      }
   }
   </script>

   <template>
   <div>
   <p>{{num}}</p>
   <p>{{username}}</p>
   </div>
   </template>

   <style scoped>

   </style>

   ```
5. 基础模板语法&指令
   1. mustache插值语法：`<p>{{ num }}</p>`
   2. v-once, 不更新插值数据：`<p v-once>{{ num }}</p>`
   3. v-html, 原始html：`<div v-html="msg"></div>`
   4. v-bind, 属性绑定：`<div v-bind:id="id">v-model</div>`, 语法糖: `:id`
   5. v-on, 事件监听：`<button @click="addNum">num+1</button>`, 语法糖: `@click`
   6. 动态属性: `<div :[attr]="id">v-model</div>`
   7. 动态事件，参考动态属性，略
6. data：组件属性
7. methods：组件方法
8. computed：计算属性
   ```javascript
   computed:{
    reverseMsg(){
      return this.msg.split('').reverse().join('');
    }
   ```
   使用：同mustache插值语法
   * 性能提升，只要计算属性的依赖值不变，不会重复计算
   * 计算属性默认只有getter,但是也可以手动添加setter(一般只用于只读属性)
9.  