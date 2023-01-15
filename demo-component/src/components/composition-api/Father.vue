<template>
  <div>
    <p>Father Component</p>
    <Son class="son" :msg="msg" @send="receive" ref="sonRef"></Son>
    <div>receive: {{nums}}</div>
  </div>
</template>

<script setup>
import Son from './Son.vue'
import {onMounted, provide, reactive, ref, toRefs} from "vue";

// msg
const msg=ref('msg from father');
// nums
let nums=reactive([]);
// count
const count=ref(-1);

// receive
const receive=(_nums)=>{
  console.log(`receive:${_nums}`);
  nums.push(..._nums);
}

// lifecycle
const sonRef=ref();
onMounted(()=>{
  console.log(sonRef.value.nums);
})

// provide
provide("count",count);
</script>