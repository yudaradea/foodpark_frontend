<script setup>
import { ref } from "vue";

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

const showModalItem = ref(false);

function clickModalItem() {
  showModalItem.value = !showModalItem.value;
  console.log(showModalItem.value);
}
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
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
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
                      <button
                        @click="clickModalItem"
                        style="cursor: pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                      >
                        <i class="fas fa-shopping-basket"></i>
                      </button>
                    </li>
                    <li>
                      <button href="#"><i class="fal fa-heart"></i></button>
                    </li>
                    <li>
                      <button href="#"><i class="far fa-eye"></i></button>
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
                  <img src="@/assets/images/slider_img_2.png" alt="offer" class="img-fluid w-100" />
                </div>
                <div class="text">
                  <span>30% off</span>
                  <a class="title" href="menu_details.html">Dal Makhani Paneer</a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul class="d-flex flex-wrap">
                    <li>
                      <button
                        @click="clickModalItem"
                        style="cursor: pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                      >
                        <i class="fas fa-shopping-basket"></i>
                      </button>
                    </li>
                    <li>
                      <button href="#"><i class="fal fa-heart"></i></button>
                    </li>
                    <li>
                      <button href="#"><i class="far fa-eye"></i></button>
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
                  <img src="@/assets/images/slider_img_3.png" alt="offer" class="img-fluid w-100" />
                </div>
                <div class="text">
                  <span>30% off</span>
                  <a class="title" href="menu_details.html">Dal Makhani Paneer</a>
                  <p>Lightly smoked and minced pork tenderloin topped</p>
                  <ul class="d-flex flex-wrap">
                    <li>
                      <button
                        @click="clickModalItem"
                        style="cursor: pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                      >
                        <i class="fas fa-shopping-basket"></i>
                      </button>
                    </li>
                    <li>
                      <button href="#"><i class="fal fa-heart"></i></button>
                    </li>
                    <li>
                      <button href="#"><i class="far fa-eye"></i></button>
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
                      <button
                        @click="clickModalItem"
                        style="cursor: pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                      >
                        <i class="fas fa-shopping-basket"></i>
                      </button>
                    </li>
                    <li>
                      <button href="#"><i class="fal fa-heart"></i></button>
                    </li>
                    <li>
                      <button href="#"><i class="far fa-eye"></i></button>
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

  <!-- CART POPUT START -->
  <div class="fp__cart_popup" v-if="showModalItem">
    <div class="modal fade show" style="display: block" id="cartModal" tabindex="-1" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <button @click="clickModalItem" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i class="fal fa-times"></i>
            </button>
            <div class="fp__cart_popup_img">
              <img src="@/assets/images/menu1.png" alt="menu" class="img-fluid w-100" />
            </div>
            <div class="fp__cart_popup_text">
              <a href="#" class="title">Maxican Pizza Test Better</a>
              <p class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <span>(201)</span>
              </p>
              <h4 class="price">$320.00 <del>$350.00</del></h4>

              <div class="details_size">
                <h5>select size</h5>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="large" checked />
                  <label class="form-check-label" for="large"> large <span>+ $350</span> </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="medium" />
                  <label class="form-check-label" for="medium"> medium <span>+ $250</span> </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="small" />
                  <label class="form-check-label" for="small"> small <span>+ $150</span> </label>
                </div>
              </div>

              <div class="details_extra_item">
                <h5>select option <span>(optional)</span></h5>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="coca-cola" />
                  <label class="form-check-label" for="coca-cola"> coca-cola <span>+ $10</span> </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="7up" />
                  <label class="form-check-label" for="7up"> 7up <span>+ $15</span> </label>
                </div>
              </div>

              <div class="details_quentity">
                <h5>select quentity</h5>
                <div class="quentity_btn_area d-flex flex-wrapa align-items-center">
                  <div class="quentity_btn">
                    <button class="btn btn-danger"><i class="fal fa-minus"></i></button>
                    <input type="text" placeholder="1" />
                    <button class="btn btn-success"><i class="fal fa-plus"></i></button>
                  </div>
                  <h3>$320.00</h3>
                </div>
              </div>
              <ul class="details_button_area d-flex flex-wrap">
                <li><a class="common_btn" href="#">add to cart</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- CART POPUT END -->
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

#cartModal {
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1 !important;
}
/*============================
    Swipper Pagination end
============================*/
</style>
