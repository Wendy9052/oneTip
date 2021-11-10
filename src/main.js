import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock/mock.js'
import axios from 'axios'
import VueAxios from 'vue-axios'




const app = createApp(App)
app.use(router);
app.use(store);
app.use(VueAxios, axios)
// app.prototype.$axios = axios;
app.use(ElementPlus);
app.mount("#app")