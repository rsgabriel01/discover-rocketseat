const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
  let strInit = '\n'

  if (index <= 0) {
    strInit = ''
  }

  process.stdout.write(strInit + questions[index] + '\n R: ')
}

ask()

const answers = []

process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Bacana Gabriel!

  O que você aprendeu hoje foi:
  ${answers[0]}

  O que te aborreceu e você poderia melhorar foi:
  ${answers[1]}

  O que te deixou feliz hoje:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoa(s) hoje!

  Volte amanhã para novas reflexões.
  `)
})
