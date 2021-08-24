<template>
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
import Campo from './components/Campo.vue'
import CampoDropDown from './components/CampoDropDown.vue'
import CampoText from './components/CampoText.vue'

export default {
  name: 'Formulario',
  components: {Campo, CampoDropDown, CampoText},
  props: {
    carregando: {},
    estados: {},
    time: {}
  },
  methods: {
    salvar(){
      this.$emit('salvar', this.time)

    }
  }
}
</script>
