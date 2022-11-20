// similar to web SSL certificate encryption pubic key

const { publicEncrypt, privateDecrypt } = require('crypto')
const { publicKey, privateKey } = require('./keypair')

const message = 'I love crypto'

// drop in mail box
const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
)

console.log(encryptedData.toString('hex'))

// read the original message

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData 
)

console.log(decryptedData)