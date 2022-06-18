// Eventos de teclado
// os eventos on... sobrecrevem o uso para o ultimo implementado, já o addEventListener, empilha as execuções executa todas quando necessário

const h1 = document.querySelector('h1')

function printando() {
  console.log('Print');
}

function outraFuncao() {
  console.log('Outra coisa');
}

h1.onclick = printando
h1.onclick = outraFuncao

