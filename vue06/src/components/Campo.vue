
<template>
  <div class="col-12">
    <label :for="nome" class="form-label">{{ nome }}</label>
    <input type="text" class="form-control" :id="nome" :placeholder="nome" :value="value"
           @input="$emit('update', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Campo',
  props: {
    nome: String,
    value: String
  }
}
</script>

<style scoped>

</style>
