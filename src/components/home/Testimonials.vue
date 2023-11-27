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
</script>

<template>
  <!--=============================
       TESTIMONIAL  START
    ==============================-->
  <section class="fp__testimonial pt_95 xs_pt_66 mb_80 xs_mb_50">
    <div class="container">
      <div class="row wow fadeInUp" data-wow-duration="1s">
        <div class="col-md-8 col-lg-7 col-xl-6 m-auto text-center">
          <div class="fp__section_heading mb_40">
            <h4>testimonial</h4>
            <h2>our customar feedbacks</h2>
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

      <div class="row testi_slider">
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
          class="testimonials"
        >
          <SwiperSlide>
            <div class="col-xl-12 wow fadeInUp" data-wow-duration="1s">
              <div class="fp__single_testimonial">
                <div class="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div class="img">
                    <img src="@/assets/images/comment_img_1.png" alt="clients" class="img-fluid w-100" />
                  </div>
                  <div class="text">
                    <h4>isita islam</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div class="fp__single_testimonial_body">
                  <p class="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus praesentium quaerat nihil
                    magnam a porro eaque numquam
                  </p>
                  <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col-xl-12 wow fadeInUp" data-wow-duration="1s">
              <div class="fp__single_testimonial">
                <div class="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div class="img">
                    <img src="@/assets/images/comment_img_2.png" alt="clients" class="img-fluid w-100" />
                  </div>
                  <div class="text">
                    <h4>sumon mahmud</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div class="fp__single_testimonial_body">
                  <p class="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus praesentium quaerat nihil
                    magnam a porro eaque numquam
                  </p>
                  <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col-xl-12 wow fadeInUp" data-wow-duration="1s">
              <div class="fp__single_testimonial">
                <div class="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div class="img">
                    <img src="@/assets/images/client_img_1.jpg" alt="clients" class="img-fluid w-100" />
                  </div>
                  <div class="text">
                    <h4>israt jahan</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div class="fp__single_testimonial_body">
                  <p class="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus praesentium quaerat nihil
                    magnam a porro eaque numquam
                  </p>
                  <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col-xl-12 wow fadeInUp" data-wow-duration="1s">
              <div class="fp__single_testimonial">
                <div class="fp__testimonial_header d-flex flex-wrap align-items-center">
                  <div class="img">
                    <img src="@/assets/images/client_img_3.jpg" alt="clients" class="img-fluid w-100" />
                  </div>
                  <div class="text">
                    <h4>payel sarkar</h4>
                    <p>nyc usa</p>
                  </div>
                </div>
                <div class="fp__single_testimonial_body">
                  <p class="feedback">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus praesentium quaerat nihil
                    magnam a porro eaque numquam
                  </p>
                  <span class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  <!--=============================
        TESTIMONIAL END
    ==============================-->
</template>
<style>
/*============================
    Swipper pagination
============================*/
.swiper.testimonials .swiper-pagination-bullet {
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

.swiper.testimonials .swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper.testimonials .swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;

  top: 340px !important;

  bottom: 0 !important;
}

.swiper.testimonials {
  padding-bottom: 70px;
}

@media (max-width: 575.99px) {
  .swiper.testimonials .swiper-pagination {
    top: 340px !important;
  }
}

/*============================
    Swipper Pagination end
============================*/
</style>
