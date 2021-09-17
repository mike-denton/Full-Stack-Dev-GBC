
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

address['building no'];

// dot notation => error 
//address.'building no';

//reading from a key that does not exist => undefined
console.log(address.district); // undefined

address.state = 'USA'

console.log(address.state)