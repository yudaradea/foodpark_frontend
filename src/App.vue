<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar/Navbar.vue";
import { onMounted } from "vue";

import { loadScript } from "vue-plugin-load-script";

loadScript("/src/assets/js/wow.min.js").then(() => {
  new WOW().init();
});
loadScript("/src/assets/js/Font-Awesome.js");
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
