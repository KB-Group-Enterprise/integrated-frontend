import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import mixinApi from './mixins/api';
createApp(App).use(store).use(router).mixin(mixinApi).mount('#app');
