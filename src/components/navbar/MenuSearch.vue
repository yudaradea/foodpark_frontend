<script setup>
import { ref } from "vue";

const search = ref(false);

function clickSearh() {
  search.value = true;
}
</script>

<template>
  <li>
    <a @click="clickSearh" href="#" class="menu_search"><i class="far fa-search"></i></a>
    <div class="fp__search_form" :class="{ show: search }">
      <form>
        <span class="close_search" @click="search = false"><i class="far fa-times"></i></span>
        <input type="text" placeholder="Search . . ." />
        <button type="submit">search</button>
      </form>
    </div>
  </li>
</template>
