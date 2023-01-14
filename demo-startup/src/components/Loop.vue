<template>
  <div>
<!--   iter in array   -->
    <ul>
      <li v-for="(user,idx) in users" :key="user">{{ idx }}=>{{ user }}</li>
    </ul>
    <hr>
<!--    iter in obj -->
    <ul>
      <li v-for="(item,key,idx) in personObj" :key="key">{{key}},{{idx}}=>{{item}}</li>
    </ul>
    <hr>
<!--    usage of key-->
    <ul>
      <li v-for="(user,idx) in users" :key="user">
        <input type="checkbox">
        {{user}}
      </li>
    </ul>
    <button @click="addUser">add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['aaa', 'bbb', 'ccc'],
      personObj: {name: "peter", age: 18, gender: "male"}
    }
  },
  methods:{
    addUser(){
      this.users.unshift('addition');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>