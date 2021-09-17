let person = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet() {
    console.log('Hello, World!');
}

// we can assign it by reference
person.greet = greet;

person.greet();