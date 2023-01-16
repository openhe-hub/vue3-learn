import {createApp} from 'vue'
import App from './App.vue'
import api from "./plugins/axios/axiosInstance.js";

const app = createApp(App);
app.mount('#app');
app.config.globalProperties.$axios = api;
