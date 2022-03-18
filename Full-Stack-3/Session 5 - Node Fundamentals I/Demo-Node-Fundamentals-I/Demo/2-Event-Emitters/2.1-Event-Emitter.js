
// get the reference of EventEmitter class of events module
const events = require('events');

//create an object of EventEmitter class by using above reference
const em = new events.EventEmitter();

const userLogOut = function(data) {
    console.log('User logged out.: ' + data);
}
//Subscribe for FirstEvent
em.on('logout',  userLogOut);

em.on('xyz', () => console.log('xxxxxyyyyyzzz'))

// Raising FirstEvent
em.emit('logout', 'LOGOUT!!!!!!!!!.')


