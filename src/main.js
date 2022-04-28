import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios';
import { Store } from 'vuex'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost/';

Vue.config.productionTip = false


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Store)

app.mount('#app')
