// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

console.log('For com continue')
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue
  }

  console.log(i)
}

console.log('')

console.log('For com break')
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break
  }

  console.log(i)
}
