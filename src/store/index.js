import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
let register_info = window.localStorage.getItem("register_info")?JSON.parse(localStorage.getItem("register_info")):{}
console.log("register_info:",register_info)
const store = createStore({
  state () {
    return {
      registerInfo:register_info
    }
  },
  getters: {
    registerInfo(state) { 
      return state.registerInfo;  //返回注册信息
    }
  },
  mutations: {
    setRegisterInfo(state, payload) {  //存入注册信息
      state.registerInfo = payload
      window.localStorage.setItem("register_info",JSON.stringify(payload))
    }
  },
  actions: {
    SET_REGISTER_INFO(context, payload) {
      context.commit("setRegisterInfo", payload)
    }
  },
  modules: {},

})

const app = createApp({ /* your root component */ })
app.use(store)  // Install the store instance as a plugin

export default store