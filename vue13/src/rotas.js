import { createRouter, createWebHashHistory } from 'vue-router'


import Index from './pages/Index.vue'
import Sobre from './pages/Sobre.vue'
import Produto from './pages/Produto.vue'


const routes = [
  { path: '/', component: Index, name: 'index' },
  { path: '/sobre-nos', component: Sobre, name: 'sobre' },
  { path: '/produto/:codigo', component: Produto, name: 'produto' },
]


const rotas = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


export default rotas
