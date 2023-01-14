<template>
  <div>
    <button @click="handle">handle</button>
    <br>
    <button @click="handle(5)">handle2</button>
    <br>
    <button @click="handle2(5,$event)">handle3</button>
    <br>
    <!--    multi event handle-->
    <button @click="listener1(),listener2()">{{ count }}</button>
    <hr>
<!--    event qualifier-->
<!--    .stop-->
    <div @click="divClick">
      <button @click.stop="btnClick">clicke me</button>
    </div>
    <hr>
<!--    .prevent-->
    <form action="">
      <input type="submit" value="submit" @click.prevent="submit">
    </form>
    <hr>
<!--    .once-->
    <button @click.once="btnClick">click me</button>
    <br>
<!--    keyboard qualifier-->
    <input type="text" @keyup.enter="onKeyEnter"/>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      count: 1
    }
  },
  methods: {
    handle(e) {
      this.count++;
      console.log(e);
    },
    handle2(num, e) {
      this.count++;
      console.log(num);
      console.log(e);
    },
    listener1() {
      this.count += 1;
    },
    listener2() {
      this.count += 2;
    },
    divClick(){
      console.log("this is parent element");
    },
    btnClick(){
      console.log("this is child element");
    },
    submit(){
      console.log("form submission has been prevented")
    },
    onKeyEnter(){
      console.log("you click enter");
    }
  }
}
</script>

<style scoped>

</style>