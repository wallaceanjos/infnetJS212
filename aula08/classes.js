
let aluno = {
  nome: 'Ezequiel',
  cabeca() {
    console.log('cabeca')
    console.log(this)
  }
}

function Pessoa(nome) {
  this.nome = nome

  this.cabeca = function () {
    console.log(this)
  }
}

class Veiculo {
  constructor(nome) {
    this.nome = nome
  }
  tipo(){
    console.log(this)
  }
  andar(){
    console.log('nao sei andar')
  }
}

class Carro extends Veiculo {
  andar(){
    console.log('eu sei andar')
  }
}

let moto = new Carro('verde')
moto.andar()


class Nome {
  cabecao = null
}


