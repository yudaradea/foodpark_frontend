<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";
import ScrollUp from "./components/ScrollUp.vue";
</script>

<template>
  <Navbar />

  <RouterView />

  <Footer />

  <ScrollUp />
</template>

<style>
a {
  text-decoration: none;
}
</style>
