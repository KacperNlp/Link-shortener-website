import { createApp } from 'vue'
import App from './App.vue'

import AppButton from './components/AppButton.vue'
import AppHeadline from './components/AppHeadline.vue'
import AppHeadlineWithImg from './components/AppHeadlineWithImg.vue'
import AppInput from './components/AppInput.vue'
import AppResult from './components/AppResult.vue'

import './assets/main.css'
import './index.css'

const app = createApp(App)

app
  .component('AppButton', AppButton)
  .component('AppHeadline', AppHeadline)
  .component('AppHeadlineWithImg', AppHeadlineWithImg)
  .component('AppInput', AppInput)
  .component('AppResult', AppResult)

app.mount('#app')
