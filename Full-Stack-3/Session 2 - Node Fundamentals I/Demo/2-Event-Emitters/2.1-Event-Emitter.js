
// get the reference of EventEmitter class of events module
const events = require('events');

//create an object of EventEmitter class by using above reference
const em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on('xyz',  (data) => {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('xyz', 'This is my first Node.js event emitter example.');
