// Function hoisting

sayMyName()

sayMyLastName()

// Sofre hoisting
function sayMyName() {
  console.log('Gabriel')
}

// Não sofre hoisting
const sayMyLastName = function () {
  console.log('Souza')
}
