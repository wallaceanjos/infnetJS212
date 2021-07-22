function q4() {
  let $q4 = document.querySelector('#q4')
  let $h1 = document.createElement('h1')
  let $botao = document.createElement('button')
  let $labelQtd = document.createElement('label')
  let $labelMin = document.createElement('label')
  let $labelMax = document.createElement('label')
  let $inputQtd = document.createElement('input')
  let $inputMin = document.createElement('input')
  let $inputMax = document.createElement('input')
  let $p = document.createElement('p')

  /* HTML */
  $h1.innerHTML = 'Questão 4'
  $labelQtd.innerHTML = 'Quantidade de números:'
  $labelMin.innerHTML = 'Valor mínimo:'
  $labelMax.innerHTML = 'Valor máximo:'
  $inputQtd.type = 'number'
  $inputMin.type = 'number'
  $inputMax.type = 'number'
  $botao.innerHTML = 'Calcular'

  /* Estilização */
  $q4.style.fontWeight = 'bold'

  $labelQtd.style.display = 'block'
  $labelQtd.style.marginTop = '5px'

  $labelMin.style.display = 'block'
  $labelMin.style.marginTop = '5px'

  $labelMax.style.display = 'block'
  $labelMax.style.marginTop = '5px'

  $inputQtd.style.marginTop = '5px'
  $inputMin.style.marginTop = '5px'
  $inputMax.style.marginTop = '5px'

  $botao.style.display = 'block'
  $botao.style.padding = '10px 62px'
  $botao.style.margin = '10px 0px'

  $q4.appendChild($h1)
  $q4.appendChild($labelQtd)
  $q4.appendChild($inputQtd)
  $q4.appendChild($labelMin)
  $q4.appendChild($inputMin)
  $q4.appendChild($labelMax)
  $q4.appendChild($inputMax)
  $q4.appendChild($botao)

  $botao.onclick = () => {

    let qtd = parseInt($inputQtd.value)
    let min = parseInt($inputMin.value)
    let max = parseInt($inputMax.value)

    if (qtd === '' || min === '' || max === '') {
      window.alert('Erro: Os campos não podem ser vazios!')
    } else if (min > max) {
      window.alert('Erro: Valor mínimo precisa ser menor que valor máximo!')
    } else {
      let somaMinimoMaximo = min + max
      if (qtd > somaMinimoMaximo) {
        window.alert('Erro: Quantidade de números deve ser menor que a soma de valor mínimo e valor máximo!')
      } else {
        let numeros = []

        while (numeros.length < qtd) {
          let numerosAleatorios = Math.floor(Math.random() * (max - min + 1)) + min

          if (!numeros.includes(numerosAleatorios)) {
            numeros.push(numerosAleatorios)
          }
        }
        $p.innerText = numeros.sort( (a, b) => a - b).join(', ')
        $q4.appendChild($p)
      }
    }
  }
}

q4()
