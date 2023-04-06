
const { createHash } = require('crypto')

// create a string hash

function hash(input) {
    return createHash('sha256').update(input).digest('base64')
}


let password = 'secret123'
const hash1 = hash(password)
console.log(hash1)

password = "secret456"
const hash2 = hash(password)
const match = hash1 === hash2

console.log(match ? 'good password' : 'password does not match')

// Not secure enough ===> SALT