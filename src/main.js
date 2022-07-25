import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma/css/bulma.css";

// Import the Auth0 configuration

// Import the plugin here
import { Auth0Plugin } from "./auth";

const domain = "dev-6vq4z-1l.us.auth0.com";
const clientId = "FL7eMedS9EBrXI8YMtvz1wBteeb0Jnh9";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
