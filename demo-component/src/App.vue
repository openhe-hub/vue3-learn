<script>
import Content from "./components/Content.vue";
import Father from "./components/slot/Father.vue";

export default {
  data(){
    return{

    }
  },
  components:{
    Content,
    Father
  }
}
</script>

<template>
  <div>
    <Father></Father>
  </div>
</template>

<style scoped>

</style>
