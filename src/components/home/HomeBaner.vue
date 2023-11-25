<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade];
</script>

<template>
  <!--=============================
        BANNER START
    ==============================-->

  <section class="fp__banner">
    <div class="fp__banner_overlay">
      <div class="row banner_slider">
        <div class="col-12">
          <div class="fp__banner_slider">
            <div class="container">
              <Swiper
                :modules="modules"
                :slides-per-view="1"
                :pagination="{ clickable: true }"
                :loop="true"
                :speed="1000"
                :autoplay="{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: false,
                }"
                :prevent-click="false"
              >
                <SwiperSlide>
                  <div class="row">
                    <div class="col-xl-5 col-md-5 col-lg-5">
                      <div class="fp__banner_img wow fadeInLeft" data-wow-duration="1s">
                        <div class="img">
                          <img src="@/assets/images/slider_img_1.png" alt="food item" class="img-fluid w-100" />
                          <span> 35% off </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-5 col-md-7 col-lg-6">
                      <div class="fp__banner_text wow fadeInRight" data-wow-duration="1s">
                        <h1>Different spice for a Different taste</h1>
                        <h3>Fast Food & Restaurants</h3>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minima et debitis ut
                          distinctio optio qui voluptate natus.
                        </p>
                        <ul class="d-flex flex-wrap">
                          <li><button class="common_btn" href="#">shop now</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row">
                    <div class="col-xl-5 col-md-5 col-lg-5">
                      <div class="fp__banner_img wow fadeInLeft" data-wow-duration="1s">
                        <div class="img">
                          <img src="@/assets/images/slider_img_2.png" alt="food item" class="img-fluid w-100" />
                          <span> 70% off </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-5 col-md-7 col-lg-6">
                      <div class="fp__banner_text wow fadeInRight" data-wow-duration="1s">
                        <h1>Eat healthy. Stay healthy.</h1>
                        <h3>Fast Food & Restaurants</h3>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minima et debitis ut
                          distinctio optio qui voluptate natus.
                        </p>
                        <ul class="d-flex flex-wrap">
                          <li><a class="common_btn" href="#">shop now</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="row">
                    <div class="col-xl-5 col-md-5 col-lg-5">
                      <div class="fp__banner_img wow fadeInLeft" data-wow-duration="1s">
                        <div class="img">
                          <img src="@/assets/images/slider_img_3.png" alt="food item" class="img-fluid w-100" />
                          <span> 50% off </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-5 col-md-7 col-lg-6">
                      <div class="fp__banner_text wow fadeInRight" data-wow-duration="1s">
                        <h1>Great food. Tastes good.</h1>
                        <h3>Fast Food & Restaurants</h3>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minima et debitis ut
                          distinctio optio qui voluptate natus.
                        </p>
                        <ul class="d-flex flex-wrap">
                          <li><a class="common_btn" href="#">shop now</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--=============================
        BANNER END
    ==============================-->
</template>

<style>
.fp__banner {
  background: url("../../assets/images/banner_bg.jpg");
}

/*============================
    Swipper pagination
============================*/
.swiper-pagination-bullet {
  font-size: 0;
  width: 25px;
  height: 7px;
  border-radius: 40px;
  background: var(--colorPrimary);
  margin: 0px 3px;
  padding: 0;
  opacity: 0.2;
  transition: all linear 0.2s;
  -webkit-transition: all linear 0.2s;
  -moz-transition: all linear 0.2s;
  -ms-transition: all linear 0.2s;
  -o-transition: all linear 0.2s;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  top: 600px !important;
  /* background-color: aqua; */
}

@media (max-width: 575.99px) {
  .swiper-pagination {
    top: 720px !important;
  }
}

/*============================
    Swipper Pagination end
============================*/
</style>
