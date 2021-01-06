// UI Vars
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// Load event listeners
loadEventListeners();

// Load the event listeners
function loadEventListeners(){
	// Add task
	form.addEventListener('submit', addTask);
	// Remove task
	taskList.addEventListener('click', removeTask);
	// Clear tasks
	clearBtn.addEventListener('click', clearTasks);
	// Filter tasks
	filter.addEventListener('keyup', filterTasks);
};

// Add Task
function addTask(e){
	if(taskInput.value === ''){
		alert('Please insert a task')
	};
	
	// Create li element
	const li = document.createElement('li');
	// Add class
	li.className = 'collection-item';
	// Add text node
	li.appendChild(document.createTextNode(taskInput.value));

	// Create link
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add favicon
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append link to li
	li.appendChild(link);

	// Append li to ul
	taskList.appendChild(li);

	// Clear input field
	taskInput.value = '';

e.preventDefault();
};

// Remove Task
function removeTask(e){
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm('Are you sure, Sir?')){
			e.target.parentElement.parentElement.remove();
		};
	}
};

// Clear Tasks
function clearTasks(){
	// taskList.innerHTML = '';

	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	}	
};

// Filter tasks
function filterTasks(e){
	const text = e.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').forEach(function(task){
		const item = task.firstChild.textContent;
		if(item.toLowerCase().indexOf(text) != -1){
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}





























