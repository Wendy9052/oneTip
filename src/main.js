import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import ElementIcon from 'element-puls/icons'
// import 'element-plus/icons/dist/index.css'





const app = createApp(App)
app.use(router);
app.use(ElementPlus)
// app.use(ElementIcon)
app.mount("#app")