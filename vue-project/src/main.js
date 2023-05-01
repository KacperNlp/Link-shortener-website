import { createApp } from 'vue'
import App from './App.vue'

//icons from extend package
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoPaperclip } from 'oh-vue-icons/icons'

addIcons(CoPaperclip)

//components from App
import AppButton from './components/AppButton.vue'
import AppHeadline from './components/AppHeadline.vue'
import AppHeadlineWithImg from './components/AppHeadlineWithImg.vue'
import AppIcon from './components/AppIcon.vue'
import AppInput from './components/AppInput.vue'
import AppResult from './components/AppResult.vue'

import './assets/main.css'
import './index.css'

const app = createApp(App)

app
  .component('AppButton', AppButton)
  .component('AppHeadline', AppHeadline)
  .component('AppHeadlineWithImg', AppHeadlineWithImg)
  .component('AppIcon', AppIcon)
  .component('AppInput', AppInput)
  .component('AppResult', AppResult)
  .component('v-icon', OhVueIcon)

app.mount('#app')
