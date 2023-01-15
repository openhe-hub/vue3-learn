<template>
  <div>
    <p>{{obj.msg}}</p>
    <p>{{newMsg}}</p>
  </div>
</template>

<script>
export default {
  name: "Son",
  inject:['msg','obj'],
  computed:{
    newMsg(){
      return this.msg();
    }
  }
}
</script>

<style scoped>

</style>