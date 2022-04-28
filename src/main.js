import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios';
import { Store } from 'vuex'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost/';
axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
    
          originalRequest._retry = true;
          store.dispatch('LogOut')
          return router.push('/login')
      }
    }
  })
  
Vue.config.productionTip = false


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Store)

app.mount('#app')
