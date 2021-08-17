<template>
  <v-container>
    <v-row class="text-center">
      <v-form>
        <Outro v-model="teste"></Outro>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>

import Outro from '@/components/Outro'
export default {
  name: 'HelloWorld',
  components: {Outro},
  data: () => ({
    teste: 'ezequiel'
  }),
  watch:{
    teste(){
      console.log(this.teste)
    }
  },
  methods: {
    deb(){
      this.$emit('input', this.teste)
    }
  }
}
</script>
