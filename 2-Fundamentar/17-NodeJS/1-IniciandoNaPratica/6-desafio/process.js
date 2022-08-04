const getFlag = require('./getFlag');

const yourName = getFlag('--yourName');

const greeting = getFlag('--greeting')

console.log(`Olá ${yourName}. ${greeting}`);