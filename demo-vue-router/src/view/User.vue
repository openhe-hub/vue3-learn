<template>
  <div>
    This is user page.
    <br>
    <router-link to="/user/profile">Go to Profile</router-link>
    <br>
    <router-link to="/user/post">Go to Post</router-link>
    <hr>

    <router-view></router-view>
    <router-view name="other"></router-view>
    <hr>

    <button @click="changePage">changePage</button>
    <br>
    <button @click="replacePage">replacePage</button>
    <br>
    <button @click="toHistory">toHistory</button>
    <br>
  </div>
</template>

<script setup>
import Post from "../components/user/Post.vue";
import Profile from "../components/user/Profile.vue";
import {useRouter} from "vue-router";

const router=useRouter();

const changePage=()=>{
  const itemId=123;
  router.push(`/item/${itemId}`);
}

const replacePage=()=>{
  const itemId=123;
  router.replace(`/item/${itemId}`);
}

const toHistory=()=>{
  router.go(1);
  alert('next');
  router.go(-2);
}

onBeforeRouteUpdate
</script>
