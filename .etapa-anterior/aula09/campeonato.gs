class Time {
  constructor(nome) {
    this.nome = nome
    this.pontos = 0
    this.golsMarcados = 0
    this.golsSofridos = 0
  }

  golsSaldo() {
    return this.golsMarcados - this.golsSofridos
  }

}

class Partida {
  constructor(casa, visitante) {
    this.casa = casa
    this.visitante = visitante

    this.golCasa = 0
    this.golVisitante = 0

  }

  jogada() {

    this.golCasa = this.golsMarcados()
    this.golVisitante = this.golsMarcados()

  }

  golsMarcados() {
    return Math.floor(Math.random() * 3)
  }


  pontuar() {
    if (this.golCasa > this.golVisitante) {
      this.casa.pontos += 3
    } else if (this.golCasa < this.golVisitante) {
      this.visitante.pontos += 3
    } else {
      this.visitante.pontos += 1
      this.casa.pontos += 1
    }
    this.casa.golsMarcados += this.golCasa
    this.visitante.golsMarcados += this.golVisitante

    this.casa.golsSofridos = this.golVisitante
    this.visitante.golsSofridos = this.golCasa
  }
}

function ReiniciarPartidas() {
  let planilha = SpreadsheetApp.getActive()
  let valores = []

  let linhaPartidas = planilha.getRange('A2:D').getValues()

  for (let linha of linhaPartidas) {
    if (linha[0] === '') { // se a primeira coluna estiver vazia
      break
    }

    let partida = [
      Math.floor(Math.random() * 3),
      Math.floor(Math.random() * 3)
    ]
    valores.push(partida)
  }
  let ultimaLinha = valores.length + 1
  planilha.getRange(`B2:C${ultimaLinha}`).setValues(valores)

}

function obterTimeRange(times, values) {
  for (let linhaTime of values) {
    let nomeTime = linhaTime[0]
    if (nomeTime === '') { // se a primeira coluna estiver vazia
      break
    }
    if (!times[nomeTime]) {
      times[nomeTime] = new Time(nomeTime)
    }
  }
}


function calcularResultado() {
  let planilha = SpreadsheetApp.getActive()
  let valores = []
  let times = {}

  let linhaTimesCasa = planilha.getRange('A2:A').getValues()
  obterTimeRange(times, linhaTimesCasa)
  let linhaTimesVisitante = planilha.getRange('D2:D').getValues()
  obterTimeRange(times, linhaTimesVisitante)


  let linhaPartidas = planilha.getRange('A2:D').getValues()
  for (let linha of linhaPartidas) {
    if (linha[0] === '') { // se a primeira coluna estiver vazia
      break
    }
    let partida = new Partida(times[linha[0]], times[linha[3]])
    partida.golCasa = linha[1]
    partida.golVisitante = linha[2]
    partida.pontuar()
  }

  let timesLista = Object.values(times)


  timesLista.sort((a, b) => {
    if (a.pontos !== b.pontos) {
      return b.pontos - a.pontos
    }
    if (a.golsMarcados !== b.golsMarcados) {
      return b.golsMarcados - a.golsMarcados
    }
    if (a.golsSaldo() !== b.golsSaldo()) {
      return b.golsSaldo() - a.golsSaldo()
    }
    return a.golsSofridos - b.golsSofridos
  })
  let rangeClassificacao = planilha.getRange(`G2:K${timesLista.length + 1}`)
  let timeValores = []
  for (let time of timesLista) {
    let linha = [
      time.nome,
      time.pontos,
      time.golsSaldo(),
      time.golsMarcados,
      time.golsSofridos
    ]
    timeValores.push(linha)
  }
  rangeClassificacao.setValues(timeValores)

}

function onOpen() {
  let interface = SpreadsheetApp.getUi()
  interface.createMenu('Campeonato')
    .addItem('Reiniciar Partidas', 'ReiniciarPartidas')
    .addItem('Atualizar Classificação', 'calcularResultado')
    .addToUi()
}
