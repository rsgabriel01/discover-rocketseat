// clearInterval irá cancelar setInterval registrado

const timeOut = 900
const checking = () => console.log('Checking!')

let interval = setInterval(checking, timeOut)

const clearrInterval = () => clearInterval(interval)

setTimeout(clearrInterval, 4000)
