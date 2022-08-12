const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomethingOn', message => {
  console.log('Eu ouvi você ON: ', message)
})

ev.once('saySomethingOnce', message => {
  console.log('Eu ouvi você: ONCE', message)
})

ev.emit('saySomethingOn', 'Gabriel')
ev.emit('saySomethingOn', 'Mayk')
ev.emit('saySomethingOn', 'João')

ev.emit('saySomethingOnce', 'Zé')
ev.emit('saySomethingOnce', 'Celso')
ev.emit('saySomethingOnce', 'Rosana')
