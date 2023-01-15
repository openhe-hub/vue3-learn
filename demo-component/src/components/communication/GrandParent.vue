<template>
  <div>
    <Father></Father>
    <button @click="change">change</button>
  </div>
</template>

<script>
import Father from "./Father.vue";

export default {
  name: "GrandParent",
  data() {
    return {
      msg: "hello",
      obj:{
        msg:"hello"
      }
    }
  },
  components: {
    Father
  },
  provide(){
    return{
      msg:()=>this.msg,
      obj:this.obj
    }
  },
  methods:{
    change(){
      this.msg+='_suffix';
      this.obj.msg+='_suffix';
    }
  }
}
</script>

<style scoped>

</style>