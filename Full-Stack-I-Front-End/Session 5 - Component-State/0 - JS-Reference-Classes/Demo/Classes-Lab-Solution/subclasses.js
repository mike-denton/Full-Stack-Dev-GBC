
class Car {


    constructor(m, y) {
      this.model = m;
      this.year = y;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  

  
  // SUBCLASSES;
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);
   
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance}.00`;
    }

    details() {
      console.log(`no details to show you....`)  /// runder ... jsx
    }
  }
  // Class 
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());
  // Subclass - extends Car super class
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  //console.log(sedan.info());
  console.log(sedan.details())

  // Output
  //Model: Pontiac Firebird Engine 1976
  // Volvo SD has a balance of $30000.00

  