<script setup>
</script>

<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <br>
      <router-link to="/about">Go to About</router-link>
      <br>
      <router-link to="/item/123">Go to Item 123</router-link>
      <br>
      <router-link to="/item/124">Go to Item 124</router-link>
    </p>
<!--    component mapped by routes will be rendered here-->
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
