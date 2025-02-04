import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueAnimateOnScroll from 'vue-animate-onscroll';
import './assets/main.css';

const app = createApp(App);

// Register the directive with the application instance
app.directive('animate-onscroll', VueAnimateOnScroll);

app.use(router);
app.mount('#app');
