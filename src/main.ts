import { createApp } from 'vue'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";         
//core
import "primevue/resources/primevue.min.css";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(
    Vue3Toasity,
    {
      autoClose: 3000,
      // ...
    } as ToastContainerOptions,
).use(PrimeVue).mount('#app')
