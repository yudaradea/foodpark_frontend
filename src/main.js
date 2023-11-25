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

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
