import { createApp, onUpdated } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'

let app = createApp(App)

app.use(router)

app.mount('#app')