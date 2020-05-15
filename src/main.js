import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 300ms点击延迟 */
import fastClick from "fastclick";
import "./assets/styles/reset.css";
/* 一像素边框 */
import "./assets/styles/border.css";

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
