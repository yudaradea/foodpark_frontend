<script setup>
import { ref, onBeforeMount } from "vue";

// Menu on scroll
const scroll = ref(true);
function handlleScroll() {
  if (window.pageYOffset > 300) {
    if (scroll.value) scroll.value = false;
  } else {
    if (!scroll.value) scroll.value = true;
  }
}

onBeforeMount(() => {
  window.addEventListener("scroll", handlleScroll);
});

function scrollTop() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <!--=============================
        SCROLL BUTTON START
    ==============================-->
  <transition name="fade" mode="out-in">
    <div class="fp__scroll_btn" v-if="!scroll" @click="scrollTop">go to top</div>
  </transition>
  <!--=============================
        SCROLL BUTTON END 
    ==============================-->
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
