

let alunos = [
  {nome: 'ezequiel', idade:35, nota: 5},
  {nome: 'ane', idade:32, nota: 6},
  {nome: 'joao', idade:31, nota: 7},
]

alunos.sort(a, b => a.idade - b.idade)
