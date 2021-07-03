/*
# Scope
  * Escopo determina a visibilidade de alguma variável no JS

# Block statement
O bloco, também criará um novo escopo. Chamamos de "block-scoped"

*/

{
  // vamos iniciar um bloco

  // aqui dentro é um bloco e posso colocar qualquer código

  var x = 0
  console.log(x)
} // aqui fechamos o bloco

/* 
# Var
  var é global e poderá funcionar fora de um escopo de bloco
*/

console.log('> existe Y antes do bloco? ', y)

{
  var y = 0
}

console.log('> existe Y depois do bloco? ', y)
