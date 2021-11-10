import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      registerInfo:{
        user_name: "",
        user_phone: null,
        valid_code: null,
        user_password: null,
      }
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