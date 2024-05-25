import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import { store } from './store.js';
import Vuex from 'vuex';

axios.defaults.baseURL = 'http://localhost:8080';

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router).mount('#app')
app.use(store);
app.use(Vuex);