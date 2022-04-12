// Manipulando Arrays

let techs = ['html', 'css', 'js']
console.log(techs)

// Adicionar um item no fim
techs.push('nodejs')
console.log(techs)
// Adicionar um item no começo
techs.unshift('sql')
console.log(techs)
// Remover um item do fim
techs.pop()
console.log(techs)
// Remover um item do começo
techs.shift()
console.log(techs)
// Pegar somente alguns elementos do Array
console.log(techs.slice(1, 3))
// Remover 1 ou mais itens em qualquer posição do array
techs.splice(2, 1)
console.log(techs)
// Encontrar a posição de um elemento do Array
let index = techs.indexOf('css')
console.log(index)

techs.splice(index, 1)
console.log(techs)
