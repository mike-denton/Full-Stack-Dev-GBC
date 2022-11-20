const { scryptSync, randomBytes, timingSafeEqual } = require('crypto')

function signup(email, password) {

    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64);

    // prepend salt, to hash and store in database
    const user = { email, password: `${salt}:${hashedPassword}`}
}

function login(email, password) {

    const user = users.find(v => v.email === email)
    // grab salt from database and recreate the original hash
    const [salt, key] = user.password.split(':');

    const keyBuffer = Buffer.from(key, 'hex')
    // prevent hacker timing attack
    const match = timingSafeEqual(hashBuffer, keyBuffer)

    console.log(match ? 'match successfull' : 'match failed..')

}