<script setup>
import api from "./plugins/axios/axiosInstance.js";
import {reactive, ref} from "vue";

// ==== data ====
const data = reactive([]);
const getData = () => {
  api({
    url: '/data',
    method: 'get'
  }).then((resp) => {
    console.log(resp);
    const arr = resp.data.nums;
    data.push(...arr);
  }).catch((err) => {
    console.log(err);
  })
}
// ==== msg ====
const msg = ref();
const getMsg = () => {
  api({
    url: '/hello',
    method: 'get'
  }).then(resp => {
    msg.value = resp.data.msg;
  }).catch(err => {
    console.log(err);
  })
}
// ==== obj ====
let user=reactive({name:""});
const getObj=()=>{
  api({
    url:'/obj',
    method:'get'
  }).then(resp=>{
    console.log(resp.data.user);
    user.name=resp.data.user.name;
  }).catch(err=>{
    console.log(err);
  })
}
</script>

<template>
  <div>
    <button @click="getData">get data</button>
    <div>{{ data }}</div>
    <button @click="getMsg">get message</button>
    <div>{{ msg }}</div>
    <button @click="getObj">get object</button>
    <div>{{ user.name }}</div>
  </div>
</template>

