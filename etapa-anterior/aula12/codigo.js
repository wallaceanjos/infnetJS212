let $ancora = document.querySelector('body')
let $input = document.createElement('input')

$input.onkeyup = (e) => {
  let valor = e.target.value
  if (valor.length === 8) {
    fetch(`http://viacep.com.br/ws/${valor}/json/`).then(r => r.json()).then((dados) => {

      let $resultado = document.createElement('p')
      $resultado.innerText = `cidade: ${dados.localidade} / ${dados.uf}`

      $ancora.append($resultado)
      console.log(dados)


    })
  }
}


$input.onkeydown = (e) => {
  let valor = e.target.value
  if (valor.length === 8) {
    e.target.setAttribute('disabled', true)
    e.preventDefault()
  }
}

$ancora.append($input)

let $link = document.createElement('a')
$link.setAttribute('href', 'https://google.com')
$link.innerText = 'link pro google'
$link.onclick = (e) => {
  e.preventDefault()
  console.log('vai pro google nao')
}

$ancora.append($link)


let nome = localStorage.getItem('nome')
if (!nome) {
  nome = 'teste'
  localStorage.setItem('nome', nome)
}


// criar um campo via JS
// quando atingir 8numeros (n se preocupar em validar agora)
// exibir um alerta com estes numeros

// optem dados do cep da api do viacep.com.br
// exibir informacoes na tela do cep
// montar um html com as informacoes do CEP


// ate 21h15
