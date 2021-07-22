(function () {

  let $q6 = document.querySelector('#q6')

  let $meuDisplay6 = fabrica('h3', null, ' Q6')
  let $login = fabricaInputLabel('Login: ')
  let $senha = fabricaInputLabel('Senha: ')
  let $botaoLogin = fabrica('button', null, ' Logar')
  let $botaoCadastrarInicio = fabrica('button', null, 'Cadastrar')

  let $telaElementosInicio = [$meuDisplay6, $login.$label, $senha.$label,
    $botaoLogin, $botaoCadastrarInicio]

  function AbstrAcaoSobreElementos(funcaoDaDivQ6, telaElementosSelecionados = $telaElementosInicio) {

    for (const $elemento of telaElementosSelecionados) {
      let elementoCopiado = $elemento
      let funcaoExecutada = `$q6.${funcaoDaDivQ6}(elementoCopiado)`
      eval(funcaoExecutada)
    }

  }

  function LimparElementosXGerarTelaY($elementosApagados, $elementosGerados) {
    AbstrAcaoSobreElementos('removeChild', $elementosApagados)
    AbstrAcaoSobreElementos('append', $elementosGerados)
  }

  function ProcuraUsuario(loginPesquisado) {
    let loginsLocal = localStorage.getItem('logins')
    loginsLocal = JSON.parse(loginsLocal)

    function isLoginPresenteNaDB(usuarioDB) {
      return usuarioDB.login === loginPesquisado
    }

    let LoginEncontrado = loginsLocal.filter(isLoginPresenteNaDB)

    return LoginEncontrado
  }

  function criarDatabase() {
    arrayLogins = []
    arrayLogins.push({login: 0, pass: 0})
    localStorage.setItem('logins', JSON.stringify(arrayLogins))
  }

  function verificacaoDB() {
    let arrayLogins = localStorage.getItem('logins')
    if (!arrayLogins) {
      criarDatabase()
      return 0

    } else {
      arrayLogins = JSON.parse(arrayLogins)
      return 1
    }

  }


  function logou(loginPessoa) {

    let $bemvindo = fabrica('h1', null, 'Bem-vindo sr(a)', {style: 'color:red;'})
    let $pessoa = fabrica('h3', null, loginPessoa)
    let $botaoVoltar = fabrica('button', null, 'Sair')

    let $telaElementosLogado = [$bemvindo, $pessoa, $botaoVoltar]

    $botaoVoltar.onclick = () => {
      LimparElementosXGerarTelaY($telaElementosLogado, $telaElementosInicio)
    }

    LimparElementosXGerarTelaY($telaElementosInicio, $telaElementosLogado)

  }

  function cadastraLoginNaDatabase(loginCadastro, passCadastro) {
    let strLogins = localStorage.getItem('logins')
    let arrayLogins = JSON.parse(strLogins)

    let loginRepetido = ProcuraUsuario(loginCadastro)
    if (loginRepetido.length >= 1) {
      return false
    }

    arrayLogins.push({
      login: loginCadastro,
      pass: passCadastro
    })

    strLogins = JSON.stringify(arrayLogins)
    localStorage.setItem('logins', strLogins)
    return true
  }

  function levarAoCadastro() {


    $meuDisplay6.innerText = 'usuario nao encontrado, favor se cadastrar:'

    let $bemvindo = fabrica('h6', null, 'Cadastre-se Aqui', {style: 'color:blue;'})
    let $loginCadastro = fabricaInputLabel('Digite o login que voce quer')
    let $passCadastro = fabricaInputLabel('Digite a senha que voce quer')

    let $botaoVoltar = fabrica('button', null, 'Voltar')
    let $botaoCadastrar = fabrica('button', null, 'Cadastrar')

    let $elementosTelaCadastro = [$meuDisplay6, $bemvindo, $loginCadastro.$label,
      $passCadastro.$label, $botaoVoltar, $botaoCadastrar]


    LimparElementosXGerarTelaY($telaElementosInicio, $elementosTelaCadastro)

    $botaoVoltar.onclick = () => {
      LimparElementosXGerarTelaY($elementosTelaCadastro, $telaElementosInicio)
    }

    $botaoCadastrar.onclick = () => {
      let sessaoAtual = {
        login: $loginCadastro.$input.value,
        pass: $passCadastro.$input.value
      }
      let dadosInseridos = Object.values(sessaoAtual)
      if (DadosInseridosIncorretos(dadosInseridos,
        'notFaixa', 'isTexto')) {
        return
      }


      cadastrou = cadastraLoginNaDatabase($loginCadastro.$input.value,
        $passCadastro.$input.value)
      if (!cadastrou) {
        let mensagemTriste = 'login ja existente,escolha outro'
        $meuDisplay6.innerText = mensagemTriste
        window.alert(mensagemTriste)
        return
      }

      $meuDisplay6.innerText = 'usuario cadastrado com sucesso!'
      LimparElementosXGerarTelaY($elementosTelaCadastro, $telaElementosInicio)

    }

  }

  function valorPadraoEh(logo = 'lol', bol) {
    console.log(`logo eh ${logo} bol foi${bol}`)
  }

  function realizaLoginOnClick() {

    if (verificacaoDB() === 1) {
      let sessaoAtual = {
        login: $login.$input.value,
        pass: $senha.$input.value
      }
      let dadosInseridos = Object.values(sessaoAtual)

      if (DadosInseridosIncorretos(dadosInseridos,
        'notFaixa', 'isTexto')) {
        return
      }


      let LoginEncontrado = ProcuraUsuario(sessaoAtual.login)

      if (LoginEncontrado.length >= 1) {
        let usuarioDB = LoginEncontrado[0]

        if (usuarioDB.pass !== sessaoAtual.pass) {
          window.alert('usuario encontrado, senha incorreta.')
          return
        }

        logou(usuarioDB.login)
        return

      } else {
        levarAoCadastro()
      }

    } else {
      levarAoCadastro()
    }
  }

  $botaoLogin.onclick = () => realizaLoginOnClick()
  $botaoCadastrarInicio.onclick = () => levarAoCadastro()
  $q6.append(...$telaElementosInicio)

})()


/** funcao global usada nas outras questoes */
function fabrica(tipo, filhos, texto, atributos) {
  let $el = document.createElement(tipo)

  if (texto) {
    $el.innerText = texto
  }

  if (atributos) {
    for (let [chave, valor] of Object.entries(atributos)) {
      $el.setAttribute(chave, valor)
    }
  }


  if (filhos) {
    if (Array.isArray(filhos)) {
      $el.append(...filhos)

    } else {
      $el.append(filhos)
    }

  }
  return $el
}

/** funcao global usada nas outras questoes */
function fabricaInputLabel(textoLabel) {
  let $input = fabrica('input', null, '', {type: 'text'})
  let $label = fabrica('label', $input, `${textoLabel}`)
  return {$input, $label}
}

/** funcao global usada nas outras questoes */
function converteInput($vinput, $displayErro) {
  let inteiro = parseInt($vinput.value, 10)

  if (isNaN(inteiro)) {
    $displayErro.innerText = `numero invalido`

  } else {
    $displayErro.innerText = `${$displayErro.parentNode.id.toUpperCase()}`

  }
  return inteiro

}

/** funcao global usada nas outras questoes */
function verificaMultiplosCamposNaN(valores) {
  if (valores.length === 1) {
    return isNaN(valores[0])
  }
  return isNaN(valores[0])
    || verificaMultiplosCamposNaN(valores.slice(1))
}

/** funcao global usada nas outras questoes */
function verificaMultiplosCamposVazios(valores) {
  if (valores.length === 1) {
    return valores[0].includes(' ')
      || valores[0].length === 0

  }
  return valores[0].includes(' ')
    || valores[0].length === 0
    || verificaMultiplosCamposVazios(valores.slice(1))
}

/** funcao global usada nas outras questoes */
function isFaixaErrada(vMinim, vMaxim) {
  if (vMinim > vMaxim) {
    return true
  }
  return false
}

/** funcao global usada nas outras questoes */
function DadosInseridosIncorretos(dadosInseridos, isFaixa = 'notFaixa',
                                  isTexto = 'notTexto') {

  if (isTexto === 'isTexto') {
    if (verificaMultiplosCamposVazios(dadosInseridos)) {
      window.alert('Nao eh permitido espacos ou campos vazios, preencha os campos corretamente')
      return true
    }
  }

  if (isTexto === 'notTexto') {
    if (verificaMultiplosCamposNaN(dadosInseridos)) {
      window.alert('Valores nao sao numeros, digite somente numeros')
      return true
    }
  }

  if (isFaixa === 'Faixa') {
    if (isFaixaErrada(dadosInseridos[0], dadosInseridos[1])) {
      window.alert('Valores fora da faixa, digite um valor minimo e valor maximo corretos')
      return true
    }
  }
  return false
}
