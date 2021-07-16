/*
  Function() constructor

  * Expressão new
  * Criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}

const mayk = new Person('Mayk')
const gabriel = new Person('Gabriel')

console.log(mayk.walk())
console.log(gabriel.walk())
