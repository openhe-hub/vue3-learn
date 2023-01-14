<template>
  <div id="container">
    <h2>this is son component</h2>
    <h2>message from father component:{{ message }}</h2>
    <div>{{list}}</div>
    <button @click="sendParent">transmit to father</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
    return{
      num: 10
    }
  },
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
  },
  methods:{
    sendParent(){
      this.$emit('send',this.num);
    }
  },
  mounted() {
    console.log(this.$parent);
    console.log(this.$root);
  }
}
</script>

<style scoped>
#container {
  border: 1px solid black;
  background-color: cyan;
}
</style>