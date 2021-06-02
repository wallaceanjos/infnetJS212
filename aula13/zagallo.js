function fabrica(tipo, filhos, texto, atributos) {
  let $el = document.createElement(tipo)

  $el.innerText = texto || ''
  if (atributos) {
    for (let [chave, valor] of Object.entries(atributos)) {
      $el.setAttribute(chave, valor)
    }
  }

  if (filhos) {
    $el.append(filhos)
  }
  return $el
}

function limpar($el) {
  while ($el.firstChild) {
    $el.firstChild.remove()
  }
}

(() => {

  let $ancora = document.querySelector('.js_ancora')

  let $conteudo = fabrica('div', null, null, {'id': 'conteudo'})

  let $botao_aba1 = fabrica('button', null, 'cep')
  $botao_aba1.onclick = () => {
    limpar($conteudo)

    let $input = fabrica('input', null, null, {placeholder: 'cep'})
    $conteudo.append($input)

    let $botao = fabrica('button', null, 'obter dados')
    $conteudo.append($botao)

    let $conteudo_cep = fabrica('div', null, null, {'id': 'conteudo_cep'})

    $conteudo.append($conteudo_cep)

    $botao.onclick = (e) => {
      fetch(`https://viacep.com.br/ws/${$input.value}/json/`).then(r => r.json()).then(dados => {
        limpar($conteudo_cep)
        let $localidade = fabrica('h3', null, dados.localidade)
        $conteudo_cep.append($localidade)
      })
    }
  }

  $ancora.append($botao_aba1)
  let $botao_aba2 = fabrica('button', null, 'mensagem')
  $botao_aba2.onclick = () => {
    limpar($conteudo)

    let $titulo = fabrica('h1', null, 'Engolir')
    $conteudo.append($titulo)
  }

  $ancora.append($botao_aba2)
  $ancora.append($conteudo)


})()

//
// let $aba1 = fabrica('h1', null, 'Você')
// $ancora.append($aba1)
//
// let $aba2 = fabrica('h1', null, 'engolir')
// $ancora.append($aba1
