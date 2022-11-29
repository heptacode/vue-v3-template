import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import App from '@/App.vue';
import '@/styles/index.scss';

const app = createApp(App);

app.use(createPinia().use(createPersistedState()));

app.mount('#app');
