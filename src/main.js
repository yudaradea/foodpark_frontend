import "./assets/css/all.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/slick.css";
import "./assets/css/spacing.css";
import "./assets/css/venobox.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { loadScript } from "vue-plugin-load-script";

const app = createApp(App);

app.use(createPinia());
app.use(router);

loadScript("./js/jquery-3.6.0.min.js");
loadScript("./js/Font-Awesome.js");
loadScript("./js/isotope.pkgd.min.js");
loadScript("./js/wow.min.js").then(() => {
  new WOW().init();
});

app.mount("#app");
