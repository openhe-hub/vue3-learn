<script>
export default {
  // properties
  data() {
    return {
      num: 0,
      username: "openhe",
      msg:"<h2>raw html</h2>",
      id:"box",
      attr:"id"
    }
  },
  // methods
  methods:{
    addNum(){
      this.num++;
    }
  },
  // computed properties
  computed:{
    reverseMsg(){
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>

<template>
  <div>
    <p>{{ num }}</p>
    <p v-once>{{ num }}</p>
    <p>{{ username }}</p>
    <button @click="addNum">num+1</button>
    <div v-html="msg"></div>
    <div :[attr]="id">v-model</div>
    <div>reversed msg(use computed property) = {{reverseMsg}} </div>
  </div>
</template>

<style scoped>

</style>
