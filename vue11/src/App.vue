<template>
  <h3>Times</h3>
  <Tabela @apagar="apagar" :carregando="carregando" @editar="editar"/>
  <Formulario :carregando="carregando" :estados="estados" @salvar="salvar" :time="time"/>
</template>

<script>
import axios from 'axios'
import Formulario from './Formulario.vue'
import Tabela from './Tabela.vue'

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
  components: {Tabela, Formulario},
  data() {
    return {
      time: timeNovo(),
      carregando: true,
      editando: false,
      estados: [
        'RJ',
        'SP',
        'RS',
      ]
    }
  },
  computed: {
    times(){
      return this.$store.state.times
    }
  },
  methods: {
    salvar(time) {
      this.carregando = true
      if (this.editando) {
        axios.put(
            `https://sheetdb.io/api/v1/cuyfdc2x1vwf4/id/${time.id}`,
            {data: [time]}
        ).then(() => {
          Object.assign(this.editando, time)
          this.time = timeNovo()
          this.carregando = false
          this.editando = false
        })
      } else {
        axios.post(
            'https://sheetdb.io/api/v1/cuyfdc2x1vwf4',
            {data: [time]}
        ).then(() => {
          this.times.push(time)
          this.time = timeNovo()
          this.carregando = false
        })
      }
    },
    apagar({time, index}) {
      this.carregando = true
      axios.delete(`https://sheetdb.io/api/v1/cuyfdc2x1vwf4/id/${time.id}`).then(() => {
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
    this.$store.dispatch('carregar')
  }
}
</script>

