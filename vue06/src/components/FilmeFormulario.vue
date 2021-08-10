<template>
  <div class="form my-3">
    <Campo nome="Titulo" v-model="filme.titulo"></Campo>
    <Campo nome="Valor" v-model="filme.valor"></Campo>
    <Campo nome="Descrição" v-model="filme.descricao"></Campo>
    <button class="btn btn-success mt-3" @click="salvar">Salvar</button>
  </div>
</template>

<script>
export default {
  name: 'FilmeFormulario',
  props: {
    filme: Object
  },

  methods: {
    salvar() {
      this.$emit('salvou', this.filme)
    }
  }
}
</script>

<style scoped>

</style>
