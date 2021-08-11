<template>
  <v-container>
    <v-row class="text-center">

      <v-form>
        <v-input>
          <v-text-field
              v-model="teste"
              :counter="20"
              label="Exemplo"
              required
          ></v-text-field>
        </v-input>

          <v-text-field
              v-model="teste"
              :counter="20"
              label="Exemplo"
              required
          ></v-text-field>


      </v-form>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    teste: 'ezequiel'
  }),
}
</script>
