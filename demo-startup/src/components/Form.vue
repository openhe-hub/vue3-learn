<template>
    <div>
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
      <hr>
<!--      modifier-->
      <form action="">
        <input type="text" v-model.lazy.trim="msg">
        <div>{{msg}}</div>
        <input v-model.number="age">
        <div>{{typeof age}}</div>
      </form>
    </div>
</template>

<script>
export default {
  name: "Form",
  data(){
    return{
      msg:"hello world",
      age:18,
      isChecked:true,
      checked:[],
      gender:"male",
      city:"shanghai",
      cities:["shanghai"]
    }
  }
}
</script>

<style scoped>

</style>