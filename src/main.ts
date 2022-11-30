import App from '@/App.vue';
import { router } from '@/router.js';
import '@/styles/index.scss';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';

const app = createApp(App);

app.use(router);

app.use(createPinia().use(createPersistedState()));

app.mount('#app');
