<template>
  <v-input>
    <v-text-field
        :value="value"
        v-model="v"
        :counter="20"
        label="Exemplo"
        required
        @input="$emit('input', v)"
    >
    </v-text-field>
  </v-input>
</template>

<script>
export default {
  name: 'outro',
  props: ['value'],
  data() {
    return {
      v: this.$props.value
    }
  }

}
</script>

<style scoped>

</style>
