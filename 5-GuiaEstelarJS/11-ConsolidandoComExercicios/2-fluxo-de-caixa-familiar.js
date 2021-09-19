/*
  ### Sistema de gastos familiar

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    - incomes : []
    - despesas : []
  Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo.
*/

function sumArray(array) {
  let total = 0

  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }

  return total
}

function calculateBalance(incomes, expenses) {
  const totalIncomes = sumArray(incomes)
  const totalExpenses = sumArray(expenses)
  const finalBalance = totalIncomes - totalExpenses

  let balanceText = 'negativo'

  if (finalBalance > 0) {
    balanceText = 'positivo'
  } else if (finalBalance === 0) {
    balanceText = 'zerado'
  }

  console.log(
    `A familia está com saldo ${balanceText}! Saldo: R$ ${finalBalance.toFixed(
      2
    )}`
  )
}

let family = {
  incomes: [2800, 130, 586.68],
  expenses: [1100.38, 750.56, 128.45]
}

calculateBalance(family.incomes, family.expenses)
