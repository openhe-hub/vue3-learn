<template>
  <div id="container">
    <h2>This is the content of a component</h2>
    <h2>get data from child: {{num}}</h2>
    <Child :message="msg" @send="receive" ref="hello"></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Content",
  data(){
    return{
      msg:"hello world",
      list:[1,2,3,4],
      num:-1
    }
  },
  components:{
    Child
  },
  methods:{
    receive(value){
      this.num=value
    }
  },
  mounted() {
    console.log(this.$refs.hello);
  }
}
</script>

<style scoped>
  #container{
    border: 1px solid black;
    padding: 5px;
  }
</style>