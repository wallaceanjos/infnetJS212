<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['produtos']),
    query() {
      return this.$route.query
    },
    params() {
      return this.$route.params
    }
  },
  mounted() {
    this.$store.dispatch('carregar')
  }

}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png"/>

  <ul>
    <li>
      <router-link to="/">index</router-link>
    </li>
    <li>
      <router-link :to="{name: 'sobre'}">sobre</router-link>
    </li>
    <li v-for="produto in produtos" :key="produto.id">
      <router-link :to="{name: 'produto', params: { codigo: produto.codigo }}">{{ produto.nome }}</router-link>
    </li>
  </ul>


  <code>
    query {{ query }}
    params {{ params }}
  </code>


  <router-view></router-view>

</template>

<style>

</style>
