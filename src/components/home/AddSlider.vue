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
        ADD SLIDER START
    ==============================-->
  <section class="fp__add_slider mt_100 xs_mt_70 pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div class="container">
      <div class="row add_slider wow fadeInUp" data-wow-duration="1s">
        <Swiper
          :modules="modules"
          :slides-per-view="3"
          navigation
          :loop="true"
          :speed="1000"
          :breakpoints="{ 300: { slidesPerView: 1 }, 1000: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }"
          class="add_item"
        >
          <SwiperSlide>
            <div class="col-xl-12">
              <a href="#" class="fp__add_slider_single slide1">
                <div class="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col-xl-12">
              <a href="#" class="fp__add_slider_single slide2">
                <div class="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col-xl-12">
              <a href="#" class="fp__add_slider_single slide3">
                <div class="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col-xl-12">
              <a href="#" class="fp__add_slider_single slide4">
                <div class="text">
                  <h3>red chicken</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  <!--=============================
        ADD SLIDER END
    ==============================-->
</template>

<style>
.slide1 {
  background-image: url("../../assets/images/offer_slider_1.png");
}
.slide2 {
  background-image: url("../../assets/images/offer_slider_2.png");
}
.slide3 {
  background-image: url("../../assets/images/offer_slider_3.png");
}
.slide4 {
  background-image: url("../../assets/images/offer_slider_4.png");
}

.swiper.add_item .swiper-button-prev,
.swiper.add_item .swiper-button-next {
  width: 40px;
  height: 40px;
  background: var(--colorPrimary);

  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  line-height: 40px;
  text-align: center;
  color: var(--colorWhite);
  border-radius: 50%;
  opacity: 0.5;
}

.swiper.add_item .swiper-button-prev {
  background-image: url("../../assets/images/icons8-arrow-left-50.png");
  left: 2px;
}

.swiper.add_item .swiper-button-next {
  background-image: url("../../assets/images/icons8-arrow-right-100.png");
  right: 2px;
}

.swiper.add_item .swiper-button-prev:hover,
.swiper.add_item .swiper-button-next:hover {
  opacity: 1;
}

.swiper.add_item .swiper-button-prev::after,
.swiper.add_item .swiper-button-next::after {
  display: none;
}

.swiper.add_item {
  padding-left: 10px;
  padding-right: 10px;
}

@media (max-width: 575.99px) {
  .swiper.add_item {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
