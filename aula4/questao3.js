let alunos = []
let countAprovador = 0

for (let i = 0; i < 20; i++) {
  alunos[i] = []
  alunos[i][0] = i
  alunos[i][1] = Math.random() * 100
  if (alunos[i][1] > 75.0) {
    countAprovador++
  }
}
for (i = 0; i < 20; i++) {
  let situacao = alunos[i][1] > 75 ? ' APROVADO' : ' REAPROVADO'
  console.log(`Aluno ${alunos[i][0]} Nota ${alunos[i][1]}${situacao}`)
}

console.log(`APROVADOS: ${countAprovador} (${(countAprovador / 20) * 100}%) | REPROVADOS: ${20 - countAprovador} (${((20 - countAprovador) / 20) * 100}%)`)
