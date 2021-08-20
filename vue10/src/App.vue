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
      <tr v-for="time in times">
        <td>{{ time.nome }}</td>
        <td>{{ time.estado }}</td>
        <td>{{ time.torcida }}</td>
        <td>{{ time.fundacao_ano }}</td>
        <td>{{ time.info }}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <TabelaMarota :lista="times"></TabelaMarota>

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

let alunoNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'serie': '',
    'idade': '',
  }
}

export default {
  components: {CampoText, CampoDropDown, Campo},
  data() {
    return {
      time: timeNovo(),
      times: [],
      carregando: true,
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
