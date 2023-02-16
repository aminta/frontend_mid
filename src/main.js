import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faSortDown,
  faSortUp,
  faMagnifyingGlass,
  faRankingStar,
  faCircleXmark,
  faXmark,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

import { faStar } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faSortDown,
  faSortUp,
  faMagnifyingGlass,
  faRankingStar,
  faCircleXmark,
  faXmark,
  faStar,
  faStarSolid
);

const app = createApp(App);

app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
