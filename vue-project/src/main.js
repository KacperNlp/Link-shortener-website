import { createApp } from 'vue'
import App from './App.vue'

import AppButton from './components/AppButton.vue';

import './assets/main.css'
import './index.css';

const app = createApp(App);

app.component('AppButton', AppButton);

app.mount('#app')
