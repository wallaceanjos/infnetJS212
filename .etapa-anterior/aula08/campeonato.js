class Time {
  nome = null
  pontos = 0
  golsMarcados = 0
  golsSofridos = 0

  constructor(nome) {
    this.nome = nome
  }

  golsSaldo(){
    return this.golsMarcados - this.golsSofridos
  }
}

class Partida {
  casa = null
  visitante = null
  golCasa = 0
  golVisitante = 0

  constructor(casa, visitante) {
    this.casa = casa
    this.visitante = visitante
  }

  golsMarcados() {
    return Math.floor(Math.random() * 3)
  }

  jogada() {
    this.golCasa = this.golsMarcados()
    this.golVisitante = this.golsMarcados()
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
  }
}

class PartidaFinal extends Partida {
  // nao podem mexer no construtor
}

class Campeonato {
  nome = null
  times = []
  partidas = []
  campeao = null

  constructor(nome) {
    this.nome = nome
  }

  inscreverTime(time) {
    if (this.times.length > 4) {
      console.log('ja temos times de mais')
      return
    }
    this.times.push(time)
  }

  sortearPartidas() {
    this.partidas = [
      new Partida(this.times[0], this.times[1]),
      new Partida(this.times[2], this.times[3]),

      new Partida(this.times[0], this.times[2]),
      new Partida(this.times[1], this.times[3]),

      new Partida(this.times[0], this.times[3]),
      new Partida(this.times[1], this.times[2]),

      new Partida(this.times[1], this.times[0]),
      new Partida(this.times[3], this.times[2]),

      new Partida(this.times[2], this.times[0]),
      new Partida(this.times[3], this.times[1]),

      new Partida(this.times[3], this.times[0]),
      new Partida(this.times[2], this.times[1]),
    ]
  }

  iniciarPartidas(){
    for(let partida of this.partidas){
      partida.jogada()
      partida.pontuar()
    }
  }

  classificar() {
    this.times.sort((a, b) => {
      if(a.pontos !== b.pontos){
        return b.pontos - a.pontos
      }
      if(a.golsMarcados !== b.golsMarcados){
        return b.golsMarcados - a.golsMarcados
      }
      if(a.golsSaldo() !== b.golsSaldo()){
        return b.golsSaldo() - a.golsSaldo()
      }
      return a.golsSofridos - b.golsSofridos
    })
  }

  obterCampeao() {
    return this.times[0]
  }
}


(function controlador() {
  let campeonato = new Campeonato('infnet')
  let times = obterTodosTimes()

  for (let time of times) {
    campeonato.inscreverTime(time)
  }
  campeonato.sortearPartidas()
  campeonato.iniciarPartidas()
  // exibir relatorio de partidas

  campeonato.classificar()
  // exibier a tabela de classificacao

  let campeao = campeonato.obterCampeao()
  // exibir o resultao final com penaltis
  console.log(campeao.nome)

})()


function obterTodosTimes() {
  // iria em um banco de dados
  // retornaria todos os times
  return [
    new Time('A'),
    new Time('B'),
    new Time('C'),
    new Time('D'),
  ]
}
