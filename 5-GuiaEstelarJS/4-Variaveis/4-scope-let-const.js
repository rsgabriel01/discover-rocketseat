/*
# Scope
  * Escopo determina a visibilidade de alguma variável no JS

# Block statement
O bloco, também criará um novo escopo. Chamamos de "block-scoped"
 
# let e const
  const e let são locais, e só funcionam no escopo onde foram criadas
*/

let y = 1

{
  let y = 0
  console.log('> existe Y? ', y)
}

console.log('> existe Y depois do bloco? ', y)

const x = 3

{
  const x = 2
  console.log('> existe X? ', x)
}

console.log('> existe X depois do bloco? ', x)
