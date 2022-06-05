// Manipulando conteúdo

// textContent
const element = document.querySelector('h2')

element.textContent += ' Olá Devs!'

console.log(element.textContent)

// innerHTML
element.innerHTML = 'Olá Devs! <small>e Developers!</small>'

// value
const input = document.querySelector('input')

console.log(input.value)

input.value = 'Outro Valor'

console.log(input.value)

// Atributos
const header = document.querySelector('header')

header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')
