
(() => {
  let $questao03 = document.querySelector('#q3')

  let $enunciadoQuestao = document.createElement('h2')
  $enunciadoQuestao.innerText = 'Questão 03: Imprima um relatório de resultados da disciplina Javascript'
  $questao03.append($enunciadoQuestao)

  let $divBotao = document.createElement('div')

  let $botao = document.createElement('button')
  $botao.innerText = 'Criar Relatório'
  $botao.addEventListener('click', geraRelatorio)

  $divBotao.append($botao)

  $questao03.append($divBotao)


  /*
  <div>
      <h2></h2>
      <div>
          <button></button>
      </div>
  </div>
  */

  function geraNota(menorNota, maiorNota) {
    menorNota = Math.ceil(menorNota)
    maiorNota = Math.ceil(maiorNota)
    return Math.ceil(Math.random() * (maiorNota - menorNota)) + menorNota
  }

  function geraRelatorio() {
    let $divTituloRelatorio = document.createElement('div')
    $divTituloRelatorio.innerText = 'Lista de Notas'
    $divTituloRelatorio.style = 'font-size:1.5em;'
    $questao03.append($divTituloRelatorio)

    let $divAlunos = document.createElement('div')
    $questao03.append($divAlunos)

    let listaRegistros = []
    let numeroAluno = 0
    let aprovados = 0
    let reprovados = 0

    while (listaRegistros.length < 20) {
      let nota = geraNota(0, 100)
      numeroAluno++

      let situacao = ''
      if (nota >= 50) {
        situacao = 'APROVADO'
        aprovados++
      } else {
        situacao = 'REPROVADO'
        reprovados++
      }

      listaRegistros.push({numeroAluno, situacao, nota})
    }

    let $tabelaAlunos = document.createElement('table')
    $tabelaAlunos.id = 'listaAlunos'

    let $head = document.createElement('thead')
    let $titulo = document.createElement('tr')
    $head.append($titulo)
    let $tituloNumeroAluno = document.createElement('th')
    $tituloNumeroAluno.innerText = 'numero'
    $titulo.append($tituloNumeroAluno)
    let $tituloNotaAluno = document.createElement('th')
    $tituloNotaAluno.innerText = 'nota'
    $titulo.append($tituloNotaAluno)

    let $tituloSituacaoAluno = document.createElement('th')
    $tituloSituacaoAluno.innerText = 'situacao'
    $titulo.append($tituloSituacaoAluno)

    $tabelaAlunos.append($head)

    for (let aluno of listaRegistros) {

      let $linhaAluno = document.createElement('tr')
      let $tdNumeroAluno = document.createElement('td')
      $tdNumeroAluno.innerText = aluno.numeroAluno

      let $tdNotaAluno = document.createElement('td')
      $tdNotaAluno.innerText = aluno.nota

      let $tdSituacaoAluno = document.createElement('td')
      $tdSituacaoAluno.innerText = aluno.situacao

      $linhaAluno.append($tdNumeroAluno)
      $linhaAluno.append($tdNotaAluno)
      $linhaAluno.append($tdSituacaoAluno)

      $tabelaAlunos.append($linhaAluno)
    }

    $questao03.append($tabelaAlunos)

    let qtdAprovados = Math.floor((aprovados / listaRegistros.length) * 100)
    let qtdReprovados = Math.floor((reprovados / listaRegistros.length) * 100)

    let $divSituacao = document.createElement('div')
    $divSituacao.id = 'situacaoAlunos'

    $divSituacao.innerText = `APROVADOS: ${aprovados} (${qtdAprovados}%) | REPROVADOS: ${reprovados} (${qtdReprovados}%)`

    $questao03.append($divSituacao)
  }

})()
