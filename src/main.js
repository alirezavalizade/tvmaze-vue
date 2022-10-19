import { createApp } from "vue";
import App from "./App.vue";

import "./styles/index.css";

import("@xstate/inspect").then(({ inspect }) => {
  inspect({
    // options
    // url: 'https://stately.ai/viz?inspect', // (default)
    iframe: false, // open in new window
  });

  createApp(App).mount("#app");
});
