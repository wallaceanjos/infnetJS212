import { createApp } from 'vue'
import App from './App.vue'

import rotas from './rotas'
import store from './store'

createApp(App).use(rotas).use(store).mount('#app')
