<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <Navbar />
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
a {
  text-decoration: none;
}
</style>
