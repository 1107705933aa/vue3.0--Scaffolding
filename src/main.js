import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Swiper from 'swiper'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./components/mock/mockServer"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false
Vue.use(ElementUi, Swiper);
Vue.use(VueAxios, Axios);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')