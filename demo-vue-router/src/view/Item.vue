<template>
  <div>
    Item
    <div>{{ id }}</div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const route=useRoute();
const id=ref();
id.value=route.params.id;

watch(()=>route.params.id,(newId)=>{
  id.value=newId;
})
</script>

<style scoped>

</style>