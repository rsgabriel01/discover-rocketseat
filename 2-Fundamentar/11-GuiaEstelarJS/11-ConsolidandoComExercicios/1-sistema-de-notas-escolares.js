/*
  ### Transformar notas escolares

  Crie um algoritmo que trasnforme as notas dos sistema numérico para sistema de notas em caracteres do tipo A B C

  - de 90 para cima : A
  - entre 80 - 89   : B
  - entre 70 - 79   : C
  - entre 60 - 69   : D
  - menor que 60    : F
*/

let studentScore = 89.9

function bimonthlyScore(score) {
  let note
  let error = false
  const scoreA = score >= 90 && score <= 100
  const scoreB = score >= 80 && score < 90
  const scoreC = score >= 70 && score < 80
  const scoreD = score >= 60 && score < 70
  const scoreF = score >= 0 && score < 60

  if (scoreA) {
    note = 'A'
  } else if (scoreB) {
    note = 'B'
  } else if (scoreC) {
    note = 'C'
  } else if (scoreD) {
    note = 'D'
  } else if (scoreF) {
    note = 'F'
  } else {
    error = true
  }

  if (!error) {
    console.log(`O aluno tirou nota ${note}`)
  } else {
    console.log('Nota com formato incorreto')
  }
}

bimonthlyScore(studentScore)
