<template>
  <div id="container">
    <Son>
<!--      <template v-slot:header>-->
<!--        <button>click me</button>-->
<!--      </template>-->
<!--      <template v-slot:footer>-->
<!--        <p>{{msg}}</p>-->
<!--      </template>-->
<!--      <template v-slot:btn>-->
<!--        submit-->
<!--      </template>-->
      <template v-slot:list="slotProps">
        <div>{{slotProps}}</div>
        <ul>
          <li v-for="num in slotProps.list">{{num}}</li>
        </ul>
      </template>
    </Son>
  </div>
</template>

<script>
import Son from "./Son.vue";

export default {
  name: "Father",
  data(){
    return{
      msg:"father"
    }
  },
  components:{
    Son
  }
}
</script>

<style scoped>
  #container{
    border: 1px solid black;
    padding: 5px;
    width: 400px;
  }
</style>