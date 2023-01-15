<template>
  <div>
    <p>Son Component</p>
    <div>receive from father: {{msg}}</div>
    <div>provide & inject:{{count}}</div>
    <button @click="sendFather">send father</button>
    <button @click="changeCount">change count</button>
  </div>
</template>

<script setup>
import {inject, reactive, toRefs, useAttrs, useSlots} from "vue";

// data
const nums=reactive([1,2,3]);

// props
const props=defineProps({
  msg:{
    type:String,
    default:"hello"
  }
});
const {msg}=toRefs(props)

// emit
const emit=defineEmits(['send']);
const sendFather=()=>{
  emit('send',nums);
}

// context
// 1. attrs
const attrs=useAttrs();
console.log(attrs);
// 2. slots
const slots=useSlots();
console.log(slots);
// 3.  emit
// 4. expose
defineExpose({nums});

// inject
const count=inject('count');
const changeCount=()=>{
  count.value++;
}
</script>
