// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã top
let pao = true
let queijo = false

const niceBreakFast1 = pao && queijo ? 'Café top' : 'Café meia boca'

const niceBreakFast2 = pao || queijo ? 'Café top' : 'Café meia boca'

console.log(niceBreakFast1)
console.log(niceBreakFast2)

// Maior de 18
let age = 16

const canDrive = age >= 18 ? 'Can drive' : "can't drive"

console.log(canDrive)
