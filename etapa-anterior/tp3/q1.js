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

//
// (() => {
//   // Criando uma âncora entre o q1 do HTML e o Javascript
//   let $ancora = document.getElementById('q1')
//
//   // Criando um elemento DIV
//   let $div = document.createElement('div')
//   let $resultado = document.createElement('div')
//
//   // Criando dois inputs
//   let $input1 = document.createElement('input')
//   let $input2 = document.createElement('input')
//
//   // Criando botão
//   let $button = document.createElement('button')
//
//   // Colocando os elementos criados dentro da div geral pela âncora
//   $ancora.append($div)
//   $ancora.append($input1)
//   $ancora.append($input2)
//   $ancora.append($button)
//   $ancora.append($resultado)
//
//   // Colocando textos dentro dos elementos
//   $div.innerText = 'Questão 1'
//   $input1.placeholder = 'Valor Mínimo'
//   $input2.placeholder = 'Valor Máximo'
//   $button.innerText = 'Iniciar'
//
//   // Função para não aceitar letras e caracteres especiais
//   function apenasNumeros(e) {
//     let tecla = (window.event) ? e.keyCode : e.which // Pega os eventos do teclado apenas na página indexada
//     if ((tecla > 47 && tecla < 58)) // pega as tecas numéricas
//       return true
//     else {
//       return tecla === 8 || tecla === 0 // tecla 8 = backspace tecla 0 = caracteres que não produzem caracteres
//     }
//   }
//
//   // Função para não aceitar letras e caracteres especiais
//   $input1.onkeypress = apenasNumeros
//   $input2.onkeypress = apenasNumeros
//
//   $button.onclick = () => {
//
//     //Pega os valores dos inputs e transfoma em números
//     let valor1 = Number($input1.value)
//     let valor2 = Number($input2.value)
//
//     // Condicional para pegar a quantidade de números divisíveis por 6
//     if (valor1 < valor2) {
//
//       let divisiveis = 0 // variável para os números divisíveis
//       for (let i = valor1; i < valor2; i++) { // para valor 1 menor que valor 2 será somado mais 1
//
//         /* se o valor1 for divisível por 2 ou por 3 (ou seja, por 6)
//            o valor dos números diviseis será somado em mais 1 */
//         if ((i % 2 === 0) && (i % 3 === 0)) {
//           divisiveis++
//         }
//       }
//       $resultado.innerText = `A quantidade de números múltiplos por 6 é/são ${divisiveis}`
//
//     } else {
//       $resultado.innerText = `O valor mínimo é maior que o máximo`
//     }
//   }
// })

(() => {
    let anchor = document.getElementById('q1');
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("Questão 01");

    let minValueParagraph = document.createElement('p');
    let maxValueParagraph = document.createElement('p');
    let minValueInputLabel = document.createElement('label');
    let maxValueInputLabel = document.createElement('label');
    let minValueInput = document.createElement('input');
    let maxValueInput = document.createElement('input');

    let buttonParagraph = document.createElement('p');
    let btn = document.createElement('button');

    minValueInput.setAttribute('type', 'number');
    maxValueInput.setAttribute('type', 'number');
    btn.innerText = 'calcular';
    minValueInputLabel.innerText = "valor mínimo: ";
    maxValueInputLabel.innerText = "valor máximo: ";

    // Criando uma função para calcular quantos números múltiplos de 2 e 3,
        // existem entre o valor mínimo e máximo, inserido pelo usuário nos "inputs".
    function inputsSum() {
        // Verificando se algum dos inputs está em branco.
        if (minValueInput.value === "" || maxValueInput.value === "" ) {
            alert("Não foi possível realizar o cálculo, algum dos valores, não foi preenchido.");
            return;
        }
        // Verificando se o valor mínimo é menor que o máximo.
        if (minValueInput.value > maxValueInput.value) {
            alert("O valor mínimo é maior que o máximo.");
            return;
        }
        let min = Number(minValueInput.value)
        let max = Number(maxValueInput.value)
        // Variável que começa com 0 e soma mais 1 a cada número que é múltiplo de 2 e de 3.
        let counter = 0;
        // For que diz quantos números múltiplos de 2 e 3, existem entre os valores mínimo e máximo.
        for (let x = min + 1; x < max; x++) {
            if (x % 2 === 0 && x % 3 === 0) {
                counter++; // Somando mais um à variável.
            }
        }
        alert(`A quantidade de números múltiplos de 2 e 3, entre ${minValueInput.value} e ${maxValueInput.value}. É dê: ${counter}`);
    }

    // Ativando o "click" do botão, e com o "click" chamando a função.
    btn.addEventListener('click', inputsSum);

    // "h1".
    anchor.append(h1); // Colocando o "h1" no site.
    h1.appendChild(h1Text); // Inserindo o texto do "h1".

    // Parágrafos, labels e inputs.
    anchor.append(minValueParagraph);
    anchor.append(maxValueParagraph);
    minValueParagraph.appendChild(minValueInputLabel);
    maxValueParagraph.appendChild(maxValueInputLabel);
    minValueInputLabel.appendChild(minValueInput);
    maxValueInputLabel.appendChild(maxValueInput);

    // botão.
    anchor.append(buttonParagraph); // Colocando o "parágrafo" para o botão no site.
    buttonParagraph.appendChild(btn); // Inserindo o botão dentro o parágrafo.
})()

