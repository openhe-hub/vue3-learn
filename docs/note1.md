# Vue-3 Note 1
1. Vue的特性
   1. 数据驱动视图
   2. 双向数据绑定
   3. MVVM=Model(js obj)+View(dom)+ViewModel(Vue)
2. Vue 3 vs Vue 2
   1. 组合式api
   2. 多根节点组件
   3. TS支持
3. 使用Vite快速搭建Vue3(或使用vue-cli)
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
9. watch：侦听器
   ```js
   watch:{
      num(newVal,oldVal){
         console.log(newVal);
         console.log(oldVal);
      }
   }
   ```
   * 初始化渲染也触发侦听器
   ```js
   username: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal.length < 5) {
          console.log("username is too short");
        }
      }
   }
   ``` 
   * 监听不到对象属性的变化=>使用深度侦听
   ```js
   user:{
      handler(newVal,oldVal){
        console.log(newVal);
        console.log(oldVal);
      },
      deep:true
   }
   ``` 
   * 使用字符串简化深度监听
   ```js
   "user.name":{
      handler(newVal,oldVal){
        console.log(newVal);
        console.log(oldVal);
      },
   }
   ``` 
10. class动态绑定：
    1. 对象绑定：`:class="{className:propName}`
    2. 数组绑定(不常用)：`:class="[classProp1,classProp2]"`
11. css动态样式
    1. v-bind绑定style：`<div :style="styleObj">style</div>`
    2. 定义style对象：`styleObj: {
               color: "red", 
                fontSize: '20px'
            }`
    3. 注意仍为css的key-value，改为驼峰命名法        
12. `v-if`和`v-show`
   * v-if：不符合条件不渲染dom结构(条件较少改变)
      ```html
        <p v-if="age>18">i am an adult</p>
        <p v-else-if="age==18">i am exactly adult</p>
        <p v-else>i am a child</p>
        <hr>
        <template v-if="age==18">
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </template>
      ```    
   * v-show：不符合条件渲染，但是通过css控制隐藏（条件改变频繁）
      ```html
      <p v-show="gender=='male'">male</p>
      <p v-show="gender=='female'">female</p>
      ```    
13. `v-for`
    * 遍历数组
    ```html
    <ul>
      <li v-for="(user,idx) in users" :key="user">{{ idx }}=>{{ user }}</li>
    </ul>
    ``` 
    * 遍历对象
    ```html
    <ul>
      <li v-for="(item,key,idx) in personObj" :key="key">{{key}},{{idx}}=>{{item}}</li>
    </ul>
    ``` 
    * key的作用：跟踪每个节点的唯一标识；提升渲染性能 
    * vue3可以监听数组的以下变化，进行响应式处理
      * 下标修改
      * push
      * pop
      * shift
      * unshift
      * slice
      * sort
      * reverse
14. 事件处理
    * 接收event对象: 传入特殊对象`$event`
      ```html
      <button @click="handle2(5,$event)">handle3</button>
      ``` 
      ```js
      handle2(num, e) {
         this.count++;
         console.log(num);
         console.log(e);
      }
      ```
    * 多事件处理: 逗号分割处理函数即可
      ```html
      <button @click="listener1(),listener2()">{{ count }}</button>
      ```     
    * 事件修饰符
      * .stop：阻止事件冒泡
      ```html
      <div @click="divClick">
         <button @click.stop="btnClick">clicke me</button>
      </div>
      ``` 
      * .prevent：阻止表单提交
      * .once：只响应一次事件处理
    * 按键修饰符 @keyup/keydown
      * e.g. `@keyup.enter`：表单提交
      ```html
      <input type="text" @keyup.enter="onKeyEnter"/>
      ``` 
15. v-model
    * 本质是v-on监听数据改变+v-bind绑定value属性
    * v-model包含常用form元素
      * 文本
      * 单选框
      * 单选复选框
      * 多选复选框
      * 单选选项
      * 多选选项
    * demo
    ```html
      <form action="">
        <input type="text" name="" id="" v-model="msg">
        <div>{{msg}}</div>
         <!--        single checkbox-->
        <hr>
        <input type="checkbox" v-model="isChecked">
        <div>{{isChecked}}</div>
         <!--        multi checkboxes-->
        <hr>
        <input type="checkbox" v-model="checked" value="apple">apple
        <input type="checkbox" v-model="checked" value="orange">orange
        <input type="checkbox" v-model="checked" value="pear">pear
        <div>{{checked}}</div>
         <!--        radio button-->
        <hr>
        <input type="radio" v-model="gender" value="male">male
        <input type="radio" v-model="gender" value="female">female
        <div>{{gender}}</div>
         <!--        single select-->
        <hr>
        <select name="" id="" v-model="city">
          <option value="shanghai">shanghai</option>
          <option value="beijing">beijing</option>
          <option value="shenzhen">shenzhen</option>
        </select>
        <div>{{city}}</div>
         <!--        multi select-->
        <hr>
        <select name="" id="" v-model="cities" multiple>
          <option value="shanghai">shanghai</option>
          <option value="beijing">beijing</option>
          <option value="shenzhen">shenzhen</option>
        </select>
        <div>{{cities}}</div>
      </form>
    ```
    ```js
      data(){
         return{
            msg:"hello world",
            isChecked:true,
            checked:[],
            gender:"male",
            city:"shanghai",
            cities:["shanghai"]
         }
      }
    ``` 
    1. 修饰符   
       1. lazy：懒加载，减少频繁更新数据（失去焦点后再同步数据）
       2. number：输入框类型自动转为number类型
       3. trim：消除首尾空格（中间空格转为一格）
       * demo code
       ```html
         <form action="">
            <input type="text" v-model.lazy.trim="msg">
            <div>{{msg}}</div>
            <input v-model.number="age">
            <div>{{typeof age}}</div>
         </form>
       ```  