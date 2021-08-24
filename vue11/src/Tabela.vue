<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Nome</th>
        <th>Estado</th>
        <th>Torcida</th>
        <th>Ano</th>
        <th>info</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(time, index) in times">
        <td>{{ time.nome }}</td>
        <td>{{ time.estado }}</td>
        <td>{{ time.torcida }}</td>
        <td>{{ time.fundacao_ano }}</td>
        <td>{{ time.info }}</td>
        <td>
          <button class="colorido" @click="$emit('editar', time)">editar</button>
        </td>
        <td>
          <span v-if="carregando">carregando</span>
          <button v-else @click="$emit('apagar', {time, index})">apagar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'Tabela',
  props: {
    carregando: {},
  },
  computed: {
    ...mapState(['times']),
  }
}
</script>
<style scoped>

.colorido {
  background-color: #d90df0;
}

</style>
