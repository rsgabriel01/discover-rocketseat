// Callback function

function sayMyName(name) {
  console.log('Antes de executar a função callback')
  name()
  console.log('Depois de executar a call back')
}

sayMyName(() => {
  console.log('Estou em uma callback')
})
