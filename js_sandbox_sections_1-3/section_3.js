let val; 

val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
// val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// console.log(val);

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').innerHTML);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
 
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, mango){
// 	console.log(li.className);
// 	li.textContent = `${mango}: Hello`;
// });

// console.log(lis);

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
	// item.textContent = `${index + 1}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item){
	// item.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
	// liEven[i].style.background = '#f4f4f4';
};

// liEven.forEach(function(item){
// 	item.style.background = '#ccc';
// 	item.style.color = 'green';
// });


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
// // val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecation)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
// val = list.children;  
// val = list.children[0];  
// val = list.children[1].textContent = 'Hello';

// Get children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// First Child
// val = list.firstChild;
// val = list.firstElementChild;

// Last Child
// val = list.lastChild;
// val = list.lastElementChild;

// Count child element
// val = list.childElementCount;

// Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// Create elemet
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

//Append li as child to ul
// document.querySelector('ul.collection').appendChild(li); 

// Test and challenge
const newLink = document.createElement('li');
newLink.className = 'collection-item';
newLink.id = 'new-item';
newLink.setAttribute('title', 'New Item');
newLink.appendChild(document.createTextNode('This is a test'));

const newLinkLink = document.createElement('a');
newLinkLink.className = 'delete-item secondary-content';
newLinkLink.innerHTML = '<i class="fa fa-remove"></i>';
newLink.appendChild(newLinkLink);

// document.querySelector('ul.collection').appendChild(newLink);

// Test and challenge 2
const newLi = document.createElement('li');
newLi.className = 'collection-item';
newLi.id = 'new-item';
newLi.setAttribute('title', 'New Item');
newLi.innerText = 'This is another test';

const newLiLink = document.createElement('a');
newLiLink.className = 'delete-item secondary-content';
newLiLink.innerHTML = '<i class="fa fa-remove"></i>';
newLi.appendChild(newLiLink);

// document.querySelector('ul.collection').appendChild(newLi);

// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h5');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent 
const cardAction = document.querySelector('.card-action');

// Replace
// cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const listOne = document.querySelector('ul');

// Remove list item
// lis[1].remove();

// Remove by child
// list.removeChild(lis[3]);


// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
// const linkFirstLi = firstLi.children[0];
// console.log(firstLi);
// console.log(linkFirstLi);

// Classes
// val = linkFirstLi.className;
// val = linkFirstLi.classList;
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');

// console.log(val);


// document.querySelector('.clear-tasks').addEventListener('click', function(e){
// 	console.log('Hello World');

// 	// e.preventDefault();
// });


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
	// console.log('Clicked');

	let val;

	val = e;

	// Event target element
	val = e.target;
	val = e.target.attributeStyleMap;
	val = e.target.className;
	val = e.target.classList;

	// e.target.style.color = 'red';
	// e.target.style.padding = '25px';

	// Event type
	val = e.type;

	// Timestamp
	val = e.timeStamp;

	// Coordinates event relative to window
	val = e.clientY;
	val = e.clientX;

	// Coordinates event relative to element
	val = e.offsetY;
	val = e.offsetX;

	// console.log(val);
}

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);

// Mouseleave
// clearBtn.addEventListener('mouseleave', runEvent);

// Mouseover
// clearBtn.addEventListener('mouseover', runEvent);

// Mouseout
// clearBtn.addEventListener('mouseout', runEvent);

// Mousemove
// card.addEventListener('mousemove', runEvent);

// Event Handler
// function runEvent(e){
// 	console.log(`EVENT TYPE: ${e.type}`);

// 	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// 	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }
 
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);


// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// Change
// select.addEventListener('change', runEvent);

function runEvent(e){
	// console.log(`EVENT TYPE: ${e.type}`);

	// console.log(e.target.value);

	// heading.textContent = e.target.value;

	// Get input value
	// console.log(taskInput.value);

	// e.preventDefault();
}


// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
// 	console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
// 	console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
// 	console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
// 	console.log('col');
// });


// EVENT DELEGATION

// const delItem = document.querySelector('.delete-time');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
// 	// console.log(e.target);
// 	// if(e.target.parentElement.className === 'delete-item secondary-content'){
// 	// 	console.log('delete-item');
// 	// }

// 	if(e.target.parentElement.classList.contains('delete-item')){
// 		console.log('delete item');
// 		e.target.parentElement.parentElement.remove();
// 	}
// }

// SET LOCAL STORAGE ITEM
// localStorage.setItem('name', 'John'); 
// localStorage.setItem('age', '30'); 

// SET SESSION STORAGE ITEM
// sessionStorage.setItem('name', 'Beth'); 

// REMOVE FROM LOCAL STORAGE
// localStorage.removeItem('name');

// REMOVE FROM SESSION STORAGE
// sessionStorage.removeItem('name');

// Get form storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){

	const task = document.getElementById('task').value; 
	
	console.log(task);

	let tasks;

	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
	alert('Task saved');

	e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks);

console.log(tasks[tasks.length - 1]);

// tasks.forEach(function(task){
// 	console.log(task);
// });






































