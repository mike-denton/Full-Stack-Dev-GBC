
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto') 

// Cipher

const message = "I love crypto";
const key = randomBytes(32);
// initialization vector - prevent identical sequences of text
const iv = randomBytes(16)

// encryption algorithms are different than decryption

const cipher = createCipheriv('aes256', key, iv)
console.log(`cipher: ${cipher}`)
// Encrypt

const encryptedMessage = cipher.update(message, 'utf-8', 'hex')
// cipher can no longer be used to encrypt data
cipher.final('hex')

console.log(`encrypted message ${encryptedMessage}`)
// Decrypt

const decipher = createDecipheriv('aes256', key, iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')

//decipher.final('utf-8')

console.log(`dencrypted message ${decryptedMessage}`)