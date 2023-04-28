import { createApp } from 'vue'
import App from './App.vue'

import AppButton from './components/AppButton.vue'
import AppInput from './components/AppInput.vue'

import './assets/main.css'
import './index.css'

const app = createApp(App)

app.component('AppButton', AppButton).component('AppInput', AppInput)

app.mount('#app')
