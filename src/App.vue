<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar/Navbar.vue";
import { loadScript } from "vue-plugin-load-script";
import { onBeforeMount, onMounted } from "vue";

// onBeforeMount(() => {
//   loadScript("../public/js/Font-Awesome.js");
//   loadScript("../public/js/wow.min.js");
// });

// onMounted(() => {
//   new WOW().init();
// });
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style>
a {
  text-decoration: none;
}
</style>
