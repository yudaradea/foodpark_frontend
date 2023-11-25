<script setup>
import HomeBaner from "../components/home/HomeBaner.vue";
import ChooseUs from "../components/home/ChooseUs.vue";
import OverItem from "../components/home/OverItem.vue";

import { loadScript } from "vue-plugin-load-script";

loadScript("../../public/js/wow.min.js").then(() => {
  new WOW().init();
});
loadScript("../../public/js/Font-Awesome.js");
</script>

<template>
  <main>
    <HomeBaner />

    <ChooseUs />

    <OverItem />
  </main>
</template>
