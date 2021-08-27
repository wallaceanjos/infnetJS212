import { createRouter, createWebHashHistory } from 'vue-router'


import Index from './pages/Index.vue'
import Sobre from './pages/Sobre.vue'
import Produto from './pages/Produto.vue'
import Tamanho from './pages/Tamanho.vue'


const routes = [
  { path: '/', component: Index, name: 'index' },
  { path: '/sobre-nos', component: Sobre, name: 'sobre' },
  { path: '/produto/:codigo', component: Produto, name: 'produto' },
  { path: '/produto/:codigo/tamanho/:tamanho', component: Tamanho, name: 'tamanho' },
]


const rotas = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


export default rotas
