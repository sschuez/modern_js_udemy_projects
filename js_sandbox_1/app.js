// Object literal
// const brad = {
// 	name: 'brad',
// 	age: 30
// }

// Person constructor
function Person(name, dob){
	this.name = name;
	// this.age = age;
	this.birthday = new Date(dob);
	this.calculateAge = function(){
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}

const brad = new Person('Brad', '9.10.1981');
// const john = new Person('John', 24);
// const marc = new Person('Marc', 13);

// console.log(brad.calculateAge());


// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

name2.foo = 'bar';
name2.lastName = 'Schulze';


// Number
const num1 = 5;
const num2 = new Number(5);


// Boolean
const bool1 = true;
const bool2 = new Boolean(true);


// Functions
const getSum1 = function(x, y){
	return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');


// Object
// const john = {name: 'John'};
const john2 = new Object({name: "John"});


// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);


// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');




// Object.protype
// Person.prototype


// Person constructor
function Person(firstName, lastName, dob){
	this.firstName = firstName;
	this.lastName = lastName;
	// this.age = age;
	this.birthday = new Date(dob);
	// this.calculateAge = function(){
	// 	const diff = Date.now() - this.birthday.getTime();
	// 	const ageDate = new Date(diff);
	// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
	// }
}

// Calcluate age
Person.prototype.calculateAge = function(){
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
} 

// Get full name
Person.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
	this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8.12.1990');
const mary = new Person('Mary', 'Griffin', 'March 20 1978');









































