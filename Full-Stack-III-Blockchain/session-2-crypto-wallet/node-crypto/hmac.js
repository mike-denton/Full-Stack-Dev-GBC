// Hash-Based Message Authentication Code

const { createHmac } = require('crypto')

const key = 'super-secret!'
const message = 'boo';

const hmac = createHmac('sha256', key).update(message).digest('hex')

console.log(hmac)

// different password, we get entirely different hash

const key2 = 'other-password'
const hmac2 = createHmac('sha256', key2).update(message).digest('hex')