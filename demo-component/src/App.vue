<script>
import Content from "./components/Content.vue";
import GrandParent from "./components/communication/GrandParent.vue";
import Demo from "./components/composition-api/Demo.vue";
import Father from './components/composition-api/Father.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    Content,
    Father,
    GrandParent,
    Demo
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
