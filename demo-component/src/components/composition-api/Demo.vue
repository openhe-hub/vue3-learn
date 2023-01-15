<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="changeCounter">+1</button>
    <hr>
    <div>{{ obj.name }}</div>
    <button @click="changeObjName">change name</button>
    <hr>
    <div>{{username}}</div>
    <div>{{reversedUsername}}</div>
  </div>
</template>

<script setup>
import {reactive, ref, watch, watchEffect, computed, onBeforeMount, onMounted} from "vue";

// =========== counter ====================
const counter = ref(0);

function changeCounter() {
  counter.value++;
}

watch(counter,(newVal,oldVal)=>{
  console.log(`new val=${newVal}`);
  console.log(`old val=${oldVal}`);
})

// =========== obj ====================
const obj = reactive({
  name: "openhe",
});

function changeObjName() {
  obj.name = 'openhe_1';
}

watch(()=>obj.name,(newVal,oldVal)=>{
  console.log(newVal);
  console.log(oldVal);
})

watchEffect(()=>{
  console.log(obj.name);
})

// ===== username =====
const username=ref("openhe");

const reversedUsername=computed(()=>{
  return username.value.split('').reverse().join('');
})

// lifecycle function
onBeforeMount(()=>{
  console.log("before mounted");
})
onMounted(()=>{
  console.log("mounted");
})
</script>

<style scoped>

</style>