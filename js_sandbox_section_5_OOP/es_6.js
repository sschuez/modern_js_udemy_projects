class Person {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  time(){
    const currentDate = new Date();
    return `Hi ${this.firstName}, it is ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarries(newLastName){
    this.lastName = newLastName;
  }

  // Needs to be instantiated
  static addNumbers(x, y){
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', 
 '17 Aug 1988');

mary.getsMarries('Schulze');

// console.log(mary);
// console.log(mary.calculateAge());
// console.log(Person.addNumbers(1, 2));

class Person1 {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there, ${this.firstName} ${this.lastName}.`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('John', 'Doe', '0793173399', 'Standard');

console.log(john.greeting());
console.log(Customer.getMembershipCost());




































