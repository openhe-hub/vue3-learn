<script>
import Content from "./components/Content.vue";
import Father from "./components/slot/Father.vue";
import GrandParent from "./components/communication/GrandParent.vue";

export default {
  data(){
    return{

    }
  },
  components:{
    Content,
    Father,
    GrandParent
  }
}
</script>

<template>
  <div>
    <GrandParent></GrandParent>
  </div>
</template>

<style scoped>

</style>
