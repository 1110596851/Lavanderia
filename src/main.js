import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import '/node_modules/primeflex/primeflex.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import Card from "primevue/card"
import Carousel from 'primevue/carousel';
import Divider from 'primevue/divider';
import PanelMenu from 'primevue/panelmenu';
import 'primeicons/primeicons.css';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import router from './router'






const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedState);
app.use(pinia);
app.use(router)
app.use(PrimeVue);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Divider', Divider);
app.component('PanelMenu', PanelMenu);
app.mount('#app')

