import Vue from 'vue'
import App from './App.vue'
import geral from './components/geral'

import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

Vue.filter('formatar', value => 'R$ ' + value)

for(let c of geral){
  Vue.component(c, c)
}

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
