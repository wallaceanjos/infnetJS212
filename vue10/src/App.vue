<template>
  <h3>Times</h3>
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
          <button @click="editar(time)">editar</button>
        </td>
        <td>
          <span v-if="carregando">carregando</span>
          <button v-else @click="apagar(time, index)">apagar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>


  <div>

    <Campo nome="nome" v-model="time.nome"></Campo>
    <CampoDropDown nome="estado" v-model="time.estado" :itens="estados"></CampoDropDown>
    <Campo nome="tecnico" v-model="time.tecnico"></Campo>
    <Campo nome="torcida" tipo="number" v-model="time.torcida"></Campo>
    <Campo nome="fundacao" tipo="number" v-model="time.fundacao_ano"></Campo>
    <CampoText tipo="texto" nome="info" v-model="time.info"></CampoText>

    <span v-if="carregando">carregando...</span>
    <button v-else @click="salvar">salvar</button>
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
// excluir
// editar um time

import Campo from './components/Campo.vue'
import axios from 'axios'
import CampoDropDown from './components/CampoDropDown.vue'
import CampoText from './components/CampoText.vue'
import TabelaMarota from './components/TabelaMarota.vue'

let timeNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'estado': '',
    'tecnico': '',
    'torcida': '',
    'fundacao_ano': '',
    'info': ''
  }
}

export default {
  components: {TabelaMarota, CampoText, CampoDropDown, Campo},
  data() {
    return {
      time: timeNovo(),
      times: [],
      carregando: true,
      editando: false,
      estados: [
        'RJ',
        'SP',
        'RS',
      ]
    }
  },
  methods: {
    salvar() {
      this.carregando = true
      if (this.editando) {
        axios.put(
            `https://sheetdb.io/api/v1/87jz1jtmjtrf6/id/${this.time.id}`,
            {data: [this.time]}
        ).then(() => {
          Object.assign(this.editando, this.time)
          this.time = timeNovo()
          this.carregando = false
          this.editando = false
        })
      } else {
        axios.post(
            'https://sheetdb.io/api/v1/87jz1jtmjtrf6',
            {data: [this.time]}
        ).then(() => {
          this.times.push(this.time)
          this.time = timeNovo()
          this.carregando = false
        })
      }
    },
    apagar(time, index) {
      this.carregando = true
      axios.delete(`https://sheetdb.io/api/v1/87jz1jtmjtrf6/id/${time.id}`).then(() => {
        this.times.splice(index, 1)
        this.carregando = false
      })
    },
    editar(time) {
      this.editando = time
      this.time = {...time}
    }
  },
  mounted() {
    this.carregando = true
    axios.get('https://sheetdb.io/api/v1/87jz1jtmjtrf6').then(({data}) => {
      this.times = data
      this.carregando = false
    })
  }
}
</script>

<style>


</style>
