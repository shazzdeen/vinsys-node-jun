const EventEmiiter = require('events')

const myEventEmitter = new EventEmiiter();

//register a listener
myEventEmitter.on('message', ()=>{
    console.log('message event is emitted....')
})
                                                           
//raise/emit an event
m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           yEventEmitter.emit('message')