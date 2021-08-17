
<template>
  <div class="col-12">
    <label :for="nome" class="form-label">{{ nome }}</label>
    <input type="text"
           class="form-control"
           :id="nome"
           :placeholder="nome"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Campo',
  emits: ['update:modelValue'],
  props: ['nome', 'modelValue'],
  methods: {
    atualizar(){
      this.$emit('bombom')
    }
  }
}
</script>

<style scoped>

</style>
