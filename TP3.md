

# cadastrar jogadores de um time

apartir do vue11, criar uma navegação por páginas. Quando clicar em um time,
navagar para a pagina do time (usando vue-route), editar informações do time e 
fazer um crud de jogadores.

### informações de um jogador

* nome (string)
* camisa (number)
* salario (number)  
* posição (caixa de selecao, dropdown)

### paginas:

* listagem de times
* pagina de criar um time
* pagina de um time
    * editar o time
    * crud de jogadores

### exemplo de dados de um time

  ```javascript

state: {
  times: [
    {
      nome: 'gremio', jogadores: [
        {nome: 'pele', camisa: 10},
        {nome: 'romario', camisa: 11},
        {nome: 'zico', camisa: 12},
      ]
    }
  ]
}

```
