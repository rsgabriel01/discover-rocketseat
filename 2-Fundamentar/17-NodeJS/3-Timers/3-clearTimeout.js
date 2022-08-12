// clearTimeout cancelar um timeout

const timeOut = 3000
const fineshed = () => console.log('Done!')

let timer = setTimeout(fineshed, timeOut)

let clearTimer = () => clearTimeout(timer)

setTimeout(clearTimer, 2000)
