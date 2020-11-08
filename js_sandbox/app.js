
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




















































































