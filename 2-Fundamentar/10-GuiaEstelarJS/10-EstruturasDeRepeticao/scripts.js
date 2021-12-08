// Estrutura de repetição
// for...in

let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

for (const key in person) {
  console.log(key)
}

for (const key in person) {
  console.log(person[key])
}
