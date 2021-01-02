
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

// console.log(val);

// const people = [
// 	{name: 'John', age: 30},
// 	{name; 'Mike', age: 23}
// ];




// DATES & TIME
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981 20:31:35');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(20);

// console.log(birthday);

// IF STATEMENTS

// Basic Sytax

// if(something){
// 	do something
// } else {
// 	do something else
// };

const id = 100;

// Equal to
if(id == 100){
	// console.log('Correct');
} else {
	// console.log('Incorrect');
}

// Not equal to
if(id != 101){
	// console.log('Correct');
} else {
	// console.log('Incorrect');
}

// Equal to value and type
if(id === 100){
	// console.log('Correct');
} else {
	// console.log('Incorrect');
}

// Not equal to value and type
if(id !== 100){
	// console.log('Correct');
} else {
	// console.log('Incorrect');
}

// Test if undefined
if(typeof id !== 'undefined'){
	// console.log(`The id is ${id}`);
} else {
	// console.log('No id');
}

// Greater or less than
if(id >= 200){
	// console.log('Correct');
} else {
	// console.log('Incorrect');
}

// If else
const colour = 'red ';

if(colour === 'red'){
	// console.log("Colour is red"); 
} else if (colour === 'blue'){
	// console.log("Colour is blue");
} else {
	// console.log("Colour is neither red nor blue");
}

// Logical operator
const name1 = 'Steve';
const age1 = 15;

// And &&
if(age1 > 0 && age1 < 12){
	// console.log(name`${name1} is a child`);
} else if(age1 >= 13 && age1 <= 19){
	// console.log(`${name1} is a teenager`);
} else {
	// console.log(`${name1} is an adult`);
}

// Or ||
if(age1 < 16 || age1 > 65){
	// console.log(`${name1} can not run in race`);
} else {
	// console.log(`${name1} is registered for the race`);
}

// Ternary Operator
// console.log(id === 100 ? 'Correct' : 'Incorrect');




// SWITCHES
switch(colour){
	case 'red':
		// console.log('Colour is red');
		break;
	case 'blue':
		// console.log('Colour is blue');
		break;
	default:
		// console.log('Colour is neither red nor blue');
		break;
}

switch(new Date().getDay()){
	case 0:
		day = 'Sunday';
		break;
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
		break;
}

// console.log(`Today is ${day}`);




// FUNCTIONS

// Function Declaration
function greet(firstName = 'John', lastName = 'Doe'){
	// console.log('Hello');
	return `Hello ${firstName} ${lastName}`; 
}

// console.log(greet('Stephen', 'Schüz'));


// Function Expressions
const square = function(x =3){
	return x*x;
};

// console.log(square());


// Immediately invocable function expresseion (IIFEs)
(function(name = 'Stephen'){
	// console.log('Hello ' + name);
})('Brad');


// Property Methods
const todo = {
	add: function(){
		console.log('Add todo..');
	},
	edit: function(id){
			console.log(`Edit todo ${id}..`)
	}
}

todo.delete = function(){
	console.log('Delete todo..');
}

// todo.add();
// todo.edit(22);
// todo.delete();

// console.log(todo);



// LOOPS & ITERATIONS

// For loop
for(let i = 0; i < 10; i++){
	if(i === 2){
		// console.log('2 is my favourite number');
		continue; 
	}

	if(i === 5){
		// console.log('Stop the loop');
		break;
	}

	// console.log('Number ' + i);
}

// While loop
// let i = 0;

// while(i < 10){
	// console.log('Number ' + i);
	// i++;
// }

// Do while
// let i = 0;

// do {
// 	console.log('Number ' + i);
// 	i++;
// }

// while(i < 10);

// Loop through array
const cars = ['Ford', 'Chevy', 'Toyota'];
cars.push('Honda');

for(let i = 0; i < cars.length; i++){
	// console.log(cars[i]);
}


// ForEach
cars.forEach(function(car, index, array){
	// console.log(`${index}: ${car}`);
	// console.log(array);
});

// Map
const users = [
	{id: 1, name: "John"},
	{id: 2, name: "Sara"},
	{id: 2, name: "Steve"},
	{id: 4, name: "Karen"}
];

const ids = users.map(function(user){
	return user.id
});

// console.log(ids);

// For In Loop
const user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 40
}

for(let x in user){
	// console.log(`${x}: ${user[x]}`);
}



// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123);

// Alert
// alert('Hello World'); 

// Promt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
// 	console.log('Yes');
// } else {
// 	console.log('No');
// }

let valu;

// Outer heigher and width
valu = window.outerHeight;
valu = window.outerWidth;

// Inner heigher and width
valu = window.innerHeight;
valu = window.innerWidth;

// Scroll points
valu = window.scrollY;
valu = window.scrollX;

// Location object
valu = window.location;
valu = window.location.hostname;
valu = window.location.port;
valu = window.location.href;
valu = window.location.search;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History
// window.history.go(-1);

valu = window.history.length; 

// Navigator Object
valu = window.navigator;
valu = window.navigator.appName;
valu = window.navigator.appVersion;
valu = window.navigator.userAgent;
valu = window.navigator.platform;
valu = window.navigator.vendor;
valu = window.navigator.language;

// console.log(valu);

// Global Scope

var a = 1;
let b = 2;
const c = 3;

function test(){
	var a = 4;
	let b = 5;
	const c = 6;
	console.log('Function Scope: ', a, b, c); 
}

// test();

// if(true){
// 	// Block Scope
// 	var a = 4;
// 	let b = 5;
// 	const c = 6;
// 	console.log('If Scope: ', a, b, c); 	
// }

for(let a = 0; a < 10; a++){
	console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);


























































