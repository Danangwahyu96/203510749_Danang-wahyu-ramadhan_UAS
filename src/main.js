// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Import Pinia
import { Quasar } from 'quasar'; // Import Quasar
import 'quasar/dist/quasar.css';

const app = createApp(App);

const pinia = createPinia(); // Initialize Pinia instance

app.use(router);
app.use(Quasar);
app.use(pinia); // Use Pinia

app.mount('#app');
