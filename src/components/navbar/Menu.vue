<script setup>
import { ref, onBeforeMount } from "vue";
import MenuLink from "./MenuLink.vue";
import MenuSearch from "./MenuSearch.vue";
import MenuCart from "./MenuCart.vue";

// Menu mobile
const menu = ref(false);
function clickMenu() {
  menu.value = !menu.value;
}

// Menu on scroll
const scroll = ref(true);
function handlleScroll() {
  if (window.pageYOffset > 20) {
    if (scroll.value) scroll.value = false;
  } else {
    if (!scroll.value) scroll.value = true;
  }
}

onBeforeMount(() => {
  window.addEventListener("scroll", handlleScroll);
});
</script>

<template>
  <!--=============================
        MENU START
    ==============================-->
  <nav class="navbar navbar-expand-lg main_menu" :class="{ menu_fix: !scroll }">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="@/assets/images/logo.png" alt="FoodPark" class="img-fluid" />
      </a>
      <button @click="clickMenu" class="navbar-toggler" type="button">
        <i class="far fa-bars" v-if="!menu"></i>
        <i class="far fa-times" v-else></i>
      </button>

      <div :class="{ show: menu }" class="collapse navbar-collapse" id="navbarNav">
        <MenuLink />

        <ul class="menu_icon d-flex flex-wrap">
          <MenuSearch />

          <MenuCart />

          <li>
            <a class="common_btn" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              ><i class="fas fa-user me-2"></i>Login</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
