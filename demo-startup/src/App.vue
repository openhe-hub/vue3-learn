<script>
export default {
  // properties
  data() {
    return {
      num: 0,
      username: "ope",
      msg: "<h2>raw html</h2>",
      id: "box",
      attr: "id",
      user:{
        name:"openhe"
      }
    }
  },
  // methods
  methods: {
    addNum() {
      this.num++;
    },
    changeUsername(){
      this.user.name+="_prefix";
    }
  },
  // computed properties
  computed: {
    reverseMsg() {
      return this.msg.split('').reverse().join('');
    }
  },
  // data listener
  watch: {
    num(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
    // username(newVal,oldVal){
    //   if(newVal.length<5){
    //     console.log("username is too short");
    //   }
    // }
    username: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal.length < 5) {
          console.log("username is too short");
        }
      }
    },
    "user.name":{
      handler(newVal,oldVal){
        console.log(newVal);
        console.log(oldVal);
      },
      // deep:true
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
    <div>reversed msg(use computed property) = {{ reverseMsg }} </div>
    <input type="text" v-model="username"><br>
    <button @click="changeUsername">change user name</button>
  </div>
</template>

<style scoped>

</style>
