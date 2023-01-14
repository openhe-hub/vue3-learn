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
    <hr>

    <ul>
      <li v-for="(num,idx) in nums" :key="num">{{num}}</li>
    </ul>
    <button @click="changeNum">change num</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['aaa', 'bbb', 'ccc'],
      personObj: {name: "peter", age: 18, gender: "male"},
      nums:[1,5,4,3,6]
    }
  },
  methods:{
    addUser(){
      this.users.unshift('addition');
    },
    changeNum(){
      this.nums[5]=7;
      this.nums.push(0);
      this.nums.pop();
      // this.nums.shift();  delete [0]
      // this.nums.unshift(); add [0]
      this.nums.splice(3);
      this.nums.splice(1,0,-1,-3,-2);
      // splice at pos: splice(pos)
      // remove num elements from pos: splice(pos,num)
      // add [1,2,3] at pos: splice(pos,0,1,2,3)
      // replace num elements at pos with [7,8,9]: splice(pos,num,7,8,9)
      this.nums.sort();
      this.nums.reverse();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>