import 'virtual:uno.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
import App from './App.vue';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory('/fe/'),
});

app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(createPinia());

app.mount('#app');
