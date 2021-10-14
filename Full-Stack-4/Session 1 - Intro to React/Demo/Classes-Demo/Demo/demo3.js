// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

console.log(`arr2: ${arr2}`);
console.log(`arr3: ${arr3}`);

const person1 = {
  name: 'Brad',
  age: 36
};

const person2 = {
  ...person1,
  email: 'brad@gmail.com'
};

//console.log(`person2.age: ${person2.age} person2.name: ${person2.name} person2.email: ${person2.email}`);

// DESTRUCTURING

const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};


const { name, address, hobbies } = profile;
const { street, city } = profile.address;

//console.log(`street: ${street}`);
