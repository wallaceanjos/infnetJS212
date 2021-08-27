<template>
  <h1>Produto</h1>
  <h1>nome <small> {{ produto.nome }}</small></h1>
  <h1>codigo <small>{{ codigo }}</small></h1>
  <h1>tamanho <small>{{ tamanhoNome }}</small></h1>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Produto',
  computed: {
    ...mapGetters(['getProduto']),
    codigo(){
      return this.$route.params.codigo
    },
    tamanho(){
      return this.$route.params.tamanho
    },
    produto(){
      return this.getProduto(this.codigo)
    },
    tamanhoNome(){
      return this.produto.tamanhos.filter(t => t.id === this.tamanho)[0].nome
    }
  }
}
</script>

<style scoped>

</style>
