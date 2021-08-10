<template>
  <div class="card-body">
    <ul class="list-unstyled mt-3 mb-4">
      <li>{{ filme.valor | formatar }}</li>
      <li>{{ filme.descricao }}</li>
    </ul>
    <button type="button" class="w-100 btn btn-lg btn-outline-primary">Alugar</button>
  </div>
</template>

<script>
export default {
  name: 'FilmeBody',
  props: {
    filme: Object
  }
}
</script>

<style scoped>

</style>
