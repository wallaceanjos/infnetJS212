<template>
  <h2>Lista</h2>
  <ul>
    <li v-for="filme in filmes" :key="filme.id">
      {{ filme.titulo }}
      <router-link :to="{ name: 'detalhes', params: { id: filme.id }}" >detalhes</router-link>
    </li>
  </ul>
</template>

<script>
import state from '../state.js'
export default {

  computed: {
    filmes(){
      return state.filmes
    }
  }
}
</script>

<style>

</style>
