import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
      produtos: []
    }
  },

  getters: {
    getProduto(state) {
      return function (codigo) {
        return state.produtos.filter(p => p.codigo === codigo)[0]
      }
    }
  },

  mutations: {
    produtos_carregar(state, produtos) {
      state.produtos = produtos
    }
  },

  actions: {
    carregar({commit}) {
      let produtos = [
        {codigo: '1', nome: 'cocacola', tamanhos: [{id: 'a', nome: 'azinho'}, {id: 'b', nome: 'bzinho'}]},
        {codigo: '2', nome: 'pizza', tamanhos: [{id: 'a', nome: 'azinho'}]},
        {codigo: '3', nome: 'cachorro quente', tamanhos: [{id: 'b', nome: 'bzinho'}]},
        {codigo: '4', nome: 'hamburger', tamanhos: [{id: 'a', nome: 'azinho'}, {id: 'b', nome: 'bzinho'}]},
        {codigo: '5', nome: 'pastel', tamanhos: [{id: 'a', nome: 'azinho'}, {id: 'b', nome: 'bzinho'}]},
      ]
      commit('produtos_carregar', produtos)
    }
  }

})

export default store
