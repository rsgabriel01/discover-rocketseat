function getFlagValue(flag) {
  let returnFlag = ''
  const indexFlag = process.argv.indexOf(flag);

  if (indexFlag === -1) {
    returnFlag = `Não foram encontrados dados sobre a flag "${flag}" informada.`; 

    return returnFlag;
  }

  const textFlag = process.argv.at(indexFlag + 1)

  if (textFlag === undefined || textFlag === null) {
    returnFlag = `Não foi encontrado texto referente a flag "${flag}".`;

    return returnFlag;
  }

  if (textFlag === "") {
    returnFlag = `O texto referente a flag "${flag}" está vazio, verifique.`;

    return returnFlag;
  }

  return returnFlag = process.argv.at(indexFlag + 1)  
}

module.exports = getFlagValue;