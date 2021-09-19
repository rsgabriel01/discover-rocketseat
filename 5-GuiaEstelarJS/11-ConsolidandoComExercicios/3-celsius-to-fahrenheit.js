/*
  ### Celsius em Fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32
*/

// transforDegree =

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheit = degree.toUpperCase().includes('F')

  //Fluxo de error
  if (!celsiusExists && !fahrenheit) {
    throw new Error('Grau não identificado')
  }

  // Fluxo ideal: F to C
  let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = f => (f - 32) * (5 / 9)
  let degreeSign = 'C'

  // Fluxo alternativo: C to F
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = c => c * (9 / 5) + 32
    degreeSign = 'C'
  }

  return formula(updatedDegree).toFixed(2) + degreeSign
}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('10C'))
  console.log(transformDegree('15E'))
} catch (error) {
  console.log(error.message)
}
