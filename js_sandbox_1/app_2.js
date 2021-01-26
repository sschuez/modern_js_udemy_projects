// Person constructor
function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}


// Greeting
Person.prototype.greeting = function(){
	return `Hello there, ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());


// Customer constructor
function Customer(firstName, lastName, phone, membership){
	Person.call(this, firstName, lastName);
	this.phone = phone;
	this.membership = membership;
}

// Inerhit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;


// Create a customer
const customer1 = new Customer('Tom', 'Smith', '120938120498', 'Standard');

// console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
	return `Hello there, ${this.firstName} ${this.lastName}, welcome to our company`;
}

// console.log(customer1.greeting());
// console.log(person1.greeting());


const personPrototypes = {
	greeting: function(){
		return `Hello there ${this.firstName} ${this.lastName}`;
	},
	getsMarried: function(newLastName){
		this.lastName = newLastName;
	}
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Lennon';
mary.age = 30;

mary.getsMarried('Schulze');

// console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
	firstName: {value: 'Brad'},
	lastName: {value: 'Traversy'},
	age: {value: 36}
});

// console.log(brad);

// console.log(brad.greeting());








































