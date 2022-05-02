import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';
axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {    
          originalRequest._retry = true;
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('token');
          return router.push('/login')
      }
    }
  })

const app = createApp(App)

app.use(router)
app.mount('#app')