<template>
  <h1>Produto</h1>
  <h1>nome <small> {{ produto.nome }}</small></h1>
  <h1>codigo <small>{{ codigo }}</small></h1>

  <ul>
    <li v-for="tamanho in produto.tamanhos" :key="tamanho.id">
      <router-link :to="{name: 'tamanho', params: {codigo:produto.codigo, tamanho:tamanho.id }}">
        {{ tamanho.nome }}
      </router-link>
    </li>
  </ul>

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
    produto(){
      return this.getProduto(this.codigo)
    }
  }
}
</script>

<style scoped>

</style>
