import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueAnimateOnScroll from 'vue-animate-onscroll';
import VueLazyload from 'vue-lazyload';
import './assets/main.css';

const app = createApp(App);

// Register the directive with the application instance
app.directive('animate-onscroll', VueAnimateOnScroll);

app.use(router);
app.use(VueLazyload);
app.mount('#app');
