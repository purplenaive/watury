import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "@/routes/index.js";
import store from "vuex";


createApp(App)
  .use(router)
  .use(store)
  .mount("#app")
