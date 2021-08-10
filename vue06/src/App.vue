<template>
  <div class="container py-3">
    <FilmeFormulario :filme="filme" @salvou="cadastra"></FilmeFormulario>

    <FilmeLista titulo="filmes em destaque">
      <FilmeItem v-for="ff in filmes" :filme="ff" @editar="edicao">
      </FilmeItem>
    </FilmeLista>

    <div v-html="exemplo"></div>
    <div>{{ exemplo }}</div>


  </div>
</template>

<script>

import ex from './components/ex.js'

export default {
  data: () => {
    return {
      filme: {
        titulo: 'teste2222',
        valor: '1232222',
        descricao: 'ttt2222',
      },
      filmes: [],
      exemplo: ex
    }
  },
  methods: {
    carregar() {
      // fetch('filmes.json').then(r => r.json()).then((dados) => {
      //   this.filmes = dados
      // })

      this.filmes = []

    },
    cadastra() {
      this.filmes.push(this.filme)
      this.filme = {}
    },
    edicao(filme) {
      this.filme = filme
    }
  },
  mounted() {
    this.carregar()
  },

}

</script>

<style>

</style>
