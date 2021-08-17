<template>
  <h3>Times</h3>

  <div>
    <ul>
      <li v-for="time in times">{{ time.nome }}</li>
    </ul>
  </div>

  <div>

    <Campo nome="nome" v-model="time.nome"></Campo>
    <Campo nome="estado" v-model="time.estado"></Campo>
    <Campo nome="tecnico" v-model="time.tecnico"></Campo>
    <Campo nome="torcida" v-model="time.torcida"></Campo>
    <Campo nome="fundacao" v-model="time.fundacao_ano"></Campo>
    <Campo nome="info" v-model="time.info"></Campo>

    <button @click="salvar">salvar</button>
  </div>

</template>


<script>
// todo:
// atualizar lista superior
// limpar campos depois de salvar
// estados como drop-down
// torcida tem q ser do tipo number
// fundacao do tipo number
// info tem q ser um textarea

// transformar a listagem de times em uma tabela

// editar um time

import Campo from './components/Campo.vue'
import axios from 'axios'
export default {
  components: {Campo},
  data() {
    return {
      time: {
        'id': 'INCREMENT',
        'nome': '',
        'estado': '',
        'tecnico': '',
        'torcida': '',
        'fundacao_ano': '',
        'info': ''
      },
      times: []
    }
  },
  methods: {
    salvar(){
      axios.post(
        'https://sheetdb.io/api/v1/87jz1jtmjtrf6',
        {data: [this.time]}
      )
    }
  },
  mounted() {
    axios.get('https://sheetdb.io/api/v1/87jz1jtmjtrf6').then(({data}) => {
      this.times = data
    })
  }
}
</script>

<style>


</style>
