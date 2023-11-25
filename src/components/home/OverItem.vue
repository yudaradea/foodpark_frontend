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

new WOW().init();
</script>
<template>
  <!--=============================
        OFFER ITEM START
    ==============================-->
  <section class="fp__offer_item mt_100 xs_mt_70 pt_95 xs_pt_65 pb_80 xs_pb_40">
    <div class="container">
      <div class="row wow fadeInUp" data-wow-duration="1s">
        <div class="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
          <div class="fp__section_heading mb_50">
            <h4>daily offer</h4>
            <h2>up to 75% off for this day</h2>
            <span>
              <img src="@/assets/images/heading_shapes.png" alt="shapes" class="img-fluid w-100" />
            </span>
            <p>
              Objectively pontificate quality models before intuitive information. Dramatically recaptiualize
              multifunctional materials.
            </p>
          </div>
        </div>
      </div>

      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :pagination="{ clickable: true }"
        :loop="true"
        :speed="1000"
        :breakpoints="{ 300: { slidesPerView: 1 }, 1000: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }"
        class="offer_item"
      >
        <SwiperSlide>
          <div class="row offer_item_slider wow fadeInUp" data-wow-duration="1s">
            <div class="col-xl-12">
              <div class="fp__offer_item_single">
                <div class="img">
                  <img src="@/assets/images/slider_img_1.png" alt="offer" class="img-fluid w-100" />
                </div>
                <div class="text">
                  <span>30% off</span>
                  <a class="title" href="menu_details.html">Dal Makhani Paneer</a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul class="d-flex flex-wrap">
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"
                        ><i class="fas fa-shopping-basket"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"><i class="fal fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-eye"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="row offer_item_slider wow fadeInUp" data-wow-duration="1s">
            <div class="col-xl-12">
              <div class="fp__offer_item_single">
                <div class="img">
                  <img src="@/assets/images/slider_img_1.png" alt="offer" class="img-fluid w-100" />
                </div>
                <div class="text">
                  <span>30% off</span>
                  <a class="title" href="menu_details.html">Dal Makhani Paneer</a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul class="d-flex flex-wrap">
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"
                        ><i class="fas fa-shopping-basket"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"><i class="fal fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-eye"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="row offer_item_slider wow fadeInUp" data-wow-duration="1s">
            <div class="col-xl-12">
              <div class="fp__offer_item_single">
                <div class="img">
                  <img src="@/assets/images/slider_img_1.png" alt="offer" class="img-fluid w-100" />
                </div>
                <div class="text">
                  <span>30% off</span>
                  <a class="title" href="menu_details.html">Dal Makhani Paneer</a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul class="d-flex flex-wrap">
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"
                        ><i class="fas fa-shopping-basket"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"><i class="fal fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-eye"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="row offer_item_slider wow fadeInUp" data-wow-duration="1s">
            <div class="col-xl-12">
              <div class="fp__offer_item_single">
                <div class="img">
                  <img src="@/assets/images/slider_img_1.png" alt="offer" class="img-fluid w-100" />
                </div>
                <div class="text">
                  <span>30% off</span>
                  <a class="title" href="menu_details.html">Dal Makhani Paneer</a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul class="d-flex flex-wrap">
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"
                        ><i class="fas fa-shopping-basket"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"><i class="fal fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-eye"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <!--=============================
        OFFER ITEM END
    ==============================-->
</template>

<style>
/*============================
    Swipper pagination
============================*/
.swiper.offer_item .swiper-pagination-bullet {
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

.swiper.offer_item .swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper.offer_item .swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;

  top: 240px !important;

  bottom: 0 !important;
}

.swiper.offer_item {
  padding-bottom: 70px;
}

@media (max-width: 575.99px) {
  .swiper.offer_item .swiper-pagination {
    top: 240px !important;
  }
}

/*============================
    Swipper Pagination end
============================*/
</style>
