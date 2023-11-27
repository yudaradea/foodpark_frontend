<script setup>
import { defineComponent, ref } from "vue";
import CountUp from "vue-countup-v3";

const countUp = CountUp;
const options = ref({
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: ",",
  prefix: "",
  suffix: "",
  enableScrollSpy: true,
});
</script>

<template>
  <!--=============================
        COUNTER START
    ==============================-->
  <section class="fp__counter">
    <div class="fp__counter_overlay pt_100 xs_pt_70 pb_100 xs_pb_70">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
            <div class="fp__single_counter">
              <i class="fas fa-burger-soda"></i>
              <div class="text">
                <count-up :end-val="85000" :duration="3" :options="options"></count-up>
                <p>customer serve</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
            <div class="fp__single_counter">
              <i class="fal fa-hat-chef"></i>
              <div class="text">
                <count-up :end-val="120" :duration="2" :options="options"></count-up>
                <p>experience chef</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
            <div class="fp__single_counter">
              <i class="far fa-handshake"></i>
              <div class="text">
                <count-up :end-val="72000" :duration="3" :options="options"></count-up>
                <p>happy customer</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
            <div class="fp__single_counter">
              <i class="far fa-trophy"></i>
              <div class="text">
                <count-up :end-val="30" :duration="2" :options="options"></count-up>
                <p>winning award</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--=============================
        COUNTER END
    ==============================-->
</template>
<style>
.fp__counter {
  background: url("../../assets/images/counter_bg2.jpg");
}
</style>
