<script setup>
import { ref } from "vue";

const showCart = ref(false);
</script>

<template>
  <li>
    <a class="cart_icon" @click="showCart = true"><i class="fas fa-shopping-basket"></i> <span>5</span></a>
  </li>

  <!-- Menu Cart show -->
  <div class="fp__menu_cart_area" :class="{ show_mini_cart: showCart }">
    <div class="fp__menu_cart_boody">
      <div class="fp__menu_cart_header">
        <h5>total item (5)</h5>
        <span class="close_cart" @click="showCart = false"><i class="fal fa-times"></i></span>
      </div>
      <ul>
        <li>
          <div class="menu_cart_img">
            <img src="@/assets/images/menu8.png" alt="menu" class="img-fluid w-100" />
          </div>
          <div class="menu_cart_text">
            <p class="title" style="cursor: pointer" href="#">Hyderabadi Biryani</p>
            <p class="size">small</p>
            <span class="extra">coca-cola</span>
            <span class="extra">7up</span>
            <p class="price">$99.00 <del>$110.00</del></p>
          </div>
          <span class="del_icon"><i class="fal fa-times"></i></span>
        </li>
        <li>
          <div class="menu_cart_img">
            <img src="@/assets/images/menu4.png" alt="menu" class="img-fluid w-100" />
          </div>
          <div class="menu_cart_text">
            <p style="cursor: pointer" class="title" href="#">Chicken Masalas</p>
            <p class="size">medium</p>
            <span class="extra">7up</span>
            <p class="price">$70.00</p>
          </div>
          <span class="del_icon"><i class="fal fa-times"></i></span>
        </li>
        <li>
          <div class="menu_cart_img">
            <img src="@/assets/images/menu5.png" alt="menu" class="img-fluid w-100" />
          </div>
          <div class="menu_cart_text">
            <p style="cursor: pointer" class="title" href="#">Competently Supply Customized Initiatives</p>
            <p class="size">large</p>
            <span class="extra">coca-cola</span>
            <span class="extra">7up</span>
            <p class="price">$120.00 <del>$150.00</del></p>
          </div>
          <span class="del_icon"><i class="fal fa-times"></i></span>
        </li>
        <li>
          <div class="menu_cart_img">
            <img src="@/assets/images/menu6.png" alt="menu" class="img-fluid w-100" />
          </div>
          <div class="menu_cart_text">
            <p style="cursor: pointer" class="title" href="#">Hyderabadi Biryani</p>
            <p class="size">small</p>
            <span class="extra">7up</span>
            <p class="price">$59.00</p>
          </div>
          <span class="del_icon"><i class="fal fa-times"></i></span>
        </li>
        <li>
          <div class="menu_cart_img">
            <img src="@/assets/images/menu1.png" alt="menu" class="img-fluid w-100" />
          </div>
          <div class="menu_cart_text">
            <p style="cursor: pointer" class="title" href="#">Competently Supply</p>
            <p class="size">medium</p>
            <span class="extra">coca-cola</span>
            <span class="extra">7up</span>
            <p class="price">$99.00 <del>$110.00</del></p>
          </div>
          <span class="del_icon"><i class="fal fa-times"></i></span>
        </li>
      </ul>
      <p class="subtotal">sub total <span>$1220.00</span></p>
      <a class="cart_view" href="cart_view.html"> view cart</a>
      <a class="checkout" href="check_out.html">checkout</a>
    </div>
  </div>
</template>
