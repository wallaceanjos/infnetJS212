function limpar($el) {
  while ($el.firstChild) {
    $el.firstChild.remove()
  }
}


(() => {

  const $tabela = document.createElement('table')
  $tabela.className = 'table table-striped'

  const $titulo = $tabela.createTHead().insertRow()
  $titulo.insertCell(-1).innerText = 'Nome'
  $titulo.insertCell(-1).innerText = 'Turma'
  $titulo.insertCell(-1).innerText = 'Ano'
  $titulo.insertCell(-1).innerText = 'Aprovado'
  let $corpo = $tabela.createTBody()

  function criarTabela($corpo, alunos) {
    limpar($corpo)
    for (let aluno of alunos) {
      // region RENDER
      let $linha = $corpo.insertRow()
      let $nome = $linha.insertCell(-1)
      $nome.innerText = aluno.nome

      let $turma = $linha.insertCell(-1)
      $turma.innerText = aluno.turma

      let $ano = $linha.insertCell()
      $ano.innerText = aluno.ano

      let $aprovado = $linha.insertCell()

      if (aluno.aprovado === true) {
        $linha.className = 'bg-primary'

      } else if (aluno.aprovado === false) {
        $linha.className = 'bg-danger'
      }

      // endrender

      $aprovado.onclick = (e) => {
        aluno.aprovado = !aluno.aprovado
        criarTabela($corpo, alunos)
      }
    }
    console.table(alunos)
  }

  let alunos = [
    {nome: 'Ezequiel', turma: 'js', ano: 2021, aprovado: true},
    {nome: 'Joao', turma: 'py', ano: 2021},
    {nome: 'Maria', turma: 'c#', ano: 2021},
    {nome: 'Jose', turma: 'java', ano: 2021, aprovado: false},
  ]

  criarTabela($corpo, alunos)
  document.getElementById('app').appendChild($tabela)
})()
