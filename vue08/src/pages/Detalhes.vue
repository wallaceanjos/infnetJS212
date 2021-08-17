<template>
  <h2>Detalhes</h2>
  <ul>
    <li> titulo: {{ filme.titulo }} <input v-model="filme.titulo"> </li>
    <li> descricao: {{ filme.descricao }}  </li>
    <li> valor: {{ filme.valor }} </li>

  </ul>
</template>

<script>
import state from '../state.js'

export default {
  computed: {
    filme(){
      return state.filmes.filter(filme => filme.id === Number(this.$route.params.id))[0]
    }
  }
}
</script>

<style>

</style>
