import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {  // equivalente ao data de um componente
    return {
      times: []
    }
  },
  getters: { // equivalente ao computed de um componente

  },
  mutations: { // altera o state
    time_carregado(state, times){
      state.times = times
    }
  },
  actions: { // equivalente ao methods de um componente
    carregar({commit}) {
      axios.get('https://sheetdb.io/api/v1/cuyfdc2x1vwf4').then(({data}) => {
        commit('time_carregado', data)
      })
    }
  }
})

export default store
