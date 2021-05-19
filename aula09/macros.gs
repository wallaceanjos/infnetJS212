function onOpen( ){
 let ui = SpreadsheetApp.getUi()

 ui.createMenu('Meus Scripts')
      .addItem('Executar teste', 'cabeca')
      .addToUi()
}


function cabeca() {
  let spreadsheet = SpreadsheetApp.getActive()
  let range = spreadsheet.getRange('A2:A')
  let selecao = range.getValues()
  let posicao = 2

  for(let linha of selecao){
    
    if(!linha[0]){
      break
    }

    let cep = linha[0]
    dados = dadosCep(cep)
    linhaEscrever = [[dados.logradouro, dados.bairro, dados.localidade, dados.uf]]
    spreadsheet.getRange(`B${posicao}:E${posicao}`).setValues(linhaEscrever)

    posicao++
  }


}

function dadosCep(cep){
  let response = UrlFetchApp.fetch('https://viacep.com.br/ws/' + cep + '/json/');
  let dados = JSON.parse(response.getContentText())
  return dados 
}
