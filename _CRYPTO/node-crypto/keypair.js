
//https://www.youtube.com/watch?v=NuyzuNBFWxQ&list=RDCMUCsBjURrPoezykLs9EqgamOA&index=25

const { generateKeyPairSync } = require('crypto');
// RSA = Rivest-Shamir-Adleman
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // the length of your key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended to be 'spki' by Nodejs docs
        format:'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8', // recomended to be 'pkcs8' by Nodejs docs
        format: 'pem',
        // cipher 'aes-256-cbc',
        //passphrase: 'top secret'
    }
});

console.log(publicKey)
console.log(privateKey)

module.exports = {
    publicKey, 
    privateKey
}
