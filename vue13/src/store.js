import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      produtos: []
    }
  },

  getters:{
    getProduto(state){
      return function (codigo){
        return state.produtos.filter(p => p.codigo === codigo)[0]
      }
    }
  },

  mutations: {
    produtos_carregar(state, produtos){
      state.produtos = produtos
    }
  },

  actions:{
    carregar({commit}){
      let produtos = [
        {codigo: '1', nome: 'cocacola'},
        {codigo: '2', nome: 'pizza'},
        {codigo: '3', nome: 'cachorro quente'},
        {codigo: '4', nome: 'hamburger'},
        {codigo: '5', nome: 'pastel'},
      ]
      commit('produtos_carregar', produtos)
    }
  }

})

export default store
