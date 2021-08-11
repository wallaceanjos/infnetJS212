<template>
  <v-container>
    <v-row class="text-center">

      <v-input v-model="teste">

      </v-input>

    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/logo.svg'

export default {
  name: 'HelloWorld',

  data: () => ({
    teste: 'ezequiel'
  }),
}
</script>
