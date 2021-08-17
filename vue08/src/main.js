import { createApp } from 'vue'
import App from './App.vue'

import rotas from './rotas.js'

createApp(App)
  .use(rotas)
  .mount('#app')
