import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { plugin, defaultConfig } from '@formkit/vue';

import App from './App.vue';
import router from './router/index';

import 'virtual:windi.css';
import 'virtual:windi-devtools';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig);

app.mount('#app');
