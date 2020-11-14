
// NUMBERS

const num1 = 100;
const num2 = 50;
let val;

// Simple Math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math objects
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // Normal rounding
val = Math.ceil(2.6); // 
val = Math.floor(2.8); // Round up -> 2 
val = Math.sqrt(64); // square -> 8 
val = Math.abs(-3); // absolute nr -> 3 
val = Math.pow(8, 2); // power to -> 8ˆ2  
val = Math.min(2, 33, 22, 45, 23, 13, -2); // lowest nr -> -2  
val = Math.max(2, 33, 22, 45, 23, 13, -2); // lowest nr -> 45  
val = Math.random(2, 33, 22, 45, 23, 13, -2); // lowest nr -> 45  

val = Math.floor(Math.random() * 20 + 1); // random number between 1 and 20


// STRINGS ADN CONCATINATIONS

const firstName = 'Stephen';
const lastName = 'Schüz';
const age = 32; 
const str = 'Hello there my name is Stephen';

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Stephen ';
val += 'Schüz';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3]; // access the index of an array (also possible with a string)

// indexOf()
val = firstName.indexOf('e');
val = firstName.lastIndexOf('e');
// if character is not there it will be -1

// charAt()
val = firstName.charAt('2');
// Get last character
val = firstName.charAt(firstName.length -1);

// substring()
val = firstName.substring(0, 4); //pluck out 1st till 4 indexes of string

// slice()
val = firstName.slice(0, 4); // take 1st till 4 -> Step
val = firstName.slice(-3); // take last 3 -> hen 

// split()
val = str.split(' '); // split at ' ' and create an array

// replace()
val = str.replace('Stephen', 'Dominik');

// includes()
val = str.includes('Stephen'); // -> true


// TEMPLATE LITERALS

const name = 'Stephen';
// const age = 32; -> already declared
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
					'<li>Name: ' + name + '</li>' +
					'<li>Age: ' + age + '</li>' +
					'<li>Job: ' + job + '</li>' +
					'<li>City: ' + city + '</li>' +
			 '</ul>';

function hello(){
	return 'hello';
}

// With template strings (es6)
html = `
	<ul>
		<li>Name: ${name}</li>
		<li>Age: ${age}</li>
		<li>Job: ${job}</li>
		<li>City: ${city}</li>
		<li>${2 + 2}</li>
		<li>${hello()}</li>
		<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
	</ul> 
`;

document.body.innerHTML = html;


// Create some arrays
const numbers = [23,33,56,46,67];
const numbers2 = new Array(22,34,56,57,78,88);
const fruit = ['Apple', 'Mango', 'Orange', 'Pear'];

// Get array lentgh
val = numbers.length; 
// Check if is array
val = Array.isArray(numbers);
// Get singel value
val = numbers[3];
// insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add on the end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// splice values
numbers.splice(1, 1);
// reverse array
numbers.reverse();
// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); 
val = numbers.sort();
// compare function
val = numbers.sort(function(x, y){
	return x + y;
});

// Find
function under50(num){
	return num < 50;
}

val = numbers.find(under50)

const person = {
	firstName: 'Steve',
	lastName: 'Smith',
	age: 30,
	email: 'steve@aol.com',
	hobbies: ['music', 'sports'],
	address: {
		city: 'Miami',
		state: 'Florida'
	},
	getBirthyear: function(){
		return new Date().getFullYear() - this.age;
	}
}

val = person;
// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthyear();

console.log(val);

const people = [
	{name: 'John', age: 30},
	{name; 'Mike', age: 23}
];
















































































