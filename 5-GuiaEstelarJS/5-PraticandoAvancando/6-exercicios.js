// 1. Declare uma variável de nome wight
let weight

// 2. Que tipo de dado é a variável acmima?
console.log(typeof weight)

/*
   3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let name = 'Gabriel'
let age = 23
let stars = 125.5
let isSubscribed = true

/*
   4. A variaável student abaixo e de que tipo de dado?
    let student = {}
   R: object
   
   4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
   
   4.2 Mostre no console a seguinte mensagem:
    
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
let student = {
  name: 'Gabriel',
  age: 23,
  weight: 78.5,
  isSubscribed: true
}

console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
)

/*
  5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio 
*/
let students = []

/*
  6. Reatribua para a variável acima ,colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [student]

console.log(students)

/*
  7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/
const zezao = {
  name: 'Zézão',
  age: 75,
  weight: 197.8,
  isSubscribed: true
}

students[1] = zezao

console.log(students)

/*
  9. Sem toda o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e vejo se voce acertou.
  console.log(a)
  var a = 1 
*/

console.log(a)
var a = 1
