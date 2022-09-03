/**
 * Promisse
 *
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado,
 * mas irá acontecer
 **/

let aceitar = true

console.log('Pedir um Uber')

const promisse = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('Pedido aceito!')
  }

  return reject('Pedido negado.')
})

promisse
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Promisse finalizada'))

console.log('Aguardando motorista...')
