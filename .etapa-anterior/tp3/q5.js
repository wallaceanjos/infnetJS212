(() => {
  // Criando uma âncora entre o q1 do HTML e o Javascript
  let $ancora = document.getElementById('q5')

  // Criando um elemento DIV
  let $div = document.createElement('div')
  let $resultado = document.createElement('div')

  // Criando inputs
  let $input1 = document.createElement('input')
  let $input2 = document.createElement('input')
  let $input3 = document.createElement('input')

  // Criando botão
  let $button = document.createElement('button')

  // Colocando os elementos criados dentro da div geral pela âncora
  $ancora.append($div)
  $ancora.append($input1)
  $ancora.append($input2)
  $ancora.append($input3)
  $ancora.append($button)
  $ancora.append($resultado)

  // Colocando textos dentro dos elementos
  $div.innerText = 'Questão 5'
  $input1.placeholder = 'Primeiro Lado'
  $input1.type = 'number'
  $input2.placeholder = 'Segundo Lado'
  $input2.type = 'number'
  $input3.placeholder = 'Terceiro Lado'
  $input3.type = 'number'
  $button.innerText = 'Conferir Triângulo'

  $button.onclick = () => {
    // Transforma os valores dos inputs em números
    let lado1 = Number($input1.value)
    let lado2 = Number($input2.value)
    let lado3 = Number($input3.value)

    let resposta // variável vazia

    if ((lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1)) {
      resposta = 'impossível'
    } else if (lado1 === lado2 && lado2 === lado3) { // verificar se todos os lados são iguais
      resposta = 'Equilátero'
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) { // verificar se todos os lados são diferentes
      resposta = 'Escaleno'
    } else {
      resposta = 'Isósceles' // caso não seja nem um equilátero nem um escaleno logo é um isósceles :)
    }

    $resultado.innerText = `Esse triangulo é: ${resposta}`
  }
})()
