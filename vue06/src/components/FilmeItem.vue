<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal" @click="editar">{{ filme.titulo }}</h4>
      </div>
      <FilmeBody :filme="filme"></FilmeBody>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmeItem',
  props: {
    filme: Object
  },
  methods: {
    editar() {
      this.$emit('editar', this.filme)
    }
  }
}
</script>

<style scoped>

</style>
