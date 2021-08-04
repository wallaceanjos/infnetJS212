<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <h1 v-if="titulo">{{ titulo }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FilmeLista',
  props: {
    titulo: String
  }
}
</script>

<style scoped>

</style>
