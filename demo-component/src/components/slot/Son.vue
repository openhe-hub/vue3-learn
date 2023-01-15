<template>
  <div id="container">
    <slot name="header"></slot>
    <slot name="footer"></slot>
    <button>
      <slot name="btn">
        default
      </slot>
    </button>
    <slot name="list" :list="list" :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  name: "Son",
  data(){
    return {
      msg:"son",
      list:[1,2,3]
    }
  }
}
</script>

<style scoped>
  div#container{
    border: 1px solid black;
    background-color: palevioletred;
    width: 300px;
    margin: 5px;
  }
</style>