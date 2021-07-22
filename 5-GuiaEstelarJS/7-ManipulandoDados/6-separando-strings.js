/*
  Manipulando Strings e Arrays

  Separe um texto quer contém espações, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = 'Eu quero viver um amor!'

let myArray = phrase.split(' ')
console.log(myArray)

let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore)
