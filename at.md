

# cadastrar gols de uma partida

Crud de times (nome e qtd de gols)
Crud de jogadores  (nome e qtd de gols)
Crud de partidas (casa, visitante, placar)
Crud de gols (jogador e time)

![image](https://user-images.githubusercontent.com/140394/133349630-4acdef16-1891-4396-a3bc-d045b7159fc0.png)

# pontos:

* crud de time
* crud de jogador
* crud de partidas
* crud de gols
* usar vite ou vue-cli
* usar api para salvar dados (json-server ou equivalente)
* usar algum framework de css (ex: bootstrap)
* contagem correta de gols em jogador
* contagem correta de gols em times
* telas sem blinks (exibir sempre um carregando ou n exibir tela ate finalizar carga)
* usar o vuex corretamente (actions -> mutations -> alterar o state)
* usar vue-router corretamente


### Exemplo 1 de dados para json-server

  ```json
{
  "times": [
    {"id": 1, "nome": "Chapecoense"},
    {"id": 2, "nome": "Victoria"}
  ],
  "jogadores": [
    {"id": 11, "time_id":1, "nome": "Jorge"},
    {"id": 12, "time_id":1, "nome": "Mateus"},
    {"id": 13, "time_id":2, "nome": "Joao"},
    {"id": 14, "time_id":2, "nome": "Neydevar"}
  ],
  "partidas": [
    {"id": 1000, "time_casa": 1, "time_visitante": 2 }
  ],
  "gols": [
    {"id": 10000, "partida_id": 1000, "jogador_id": 11 },
    {"id": 10001, "partida_id": 1000, "jogador_id": 12 }
  ]
}
```

### Exemplo 2 de dados para json-server

  ```json
{
  "times": [
    {
      "id": 1, "nome": "Chapecoense",
      "jogadores": [
        {"id": 11, "nome": "Jorge"},
        {"id": 12, "nome": "Mateus"}
      ]
    },
    {
      "id": 2, "nome": "Victoria",
      "jogares": [
        {"id": 13,"nome": "Joao" },
        { "id": 14, "nome": "Neydevar"}
      ]
    }
  ],
  "partidas": [
    {
      "id": 1000,
      "time_casa": 1,
      "time_visitante": 2,
      "gols_casa": [
        {"jogador_id": 11},
        {"jogador_id": 12}
      ],
      "gols_visitante": []
    }
  ]
}
```
