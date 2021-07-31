// throw
function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log(name)
}

// try...catch
try {
  sayMyName()
} catch (error) {
  console.log(error)
}

console.log('Após ao try/catch')
