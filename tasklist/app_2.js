// UI vars
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');

// Load all event listeners
loadEventListeners();

// Load event listeners
function loadEventListeners(){
	// Add task
	form.addEventListener('submit', addTask);
	// Remove task
	taskList.addEventListener('click', removeTask);
	// Clear all tasks
	clearBtn.addEventListener('click', clearTasks);
	// Filter tasks
	filter.addEventListener('keyup', filterTasks);
};

// Add task
function addTask(e){
	if(taskInput.value === ''){
		alert('Add task');
	}

	// Get current date and time
	var currentTime = new Date();

	// Create li
	const li = document.createElement('li');
	// Add class
	li.className = 'collection-item';
	// Add text nodes
	li.appendChild(document.createTextNode(taskInput.value));
	li.appendChild(document.createTextNode(` - created: ${currentTime.toLocaleString()}`));

	// Create link
	const link = document.createElement('a');
	// Add class to link
	link.className = 'delete-item secondary-content';
	// Add favicon to link
	link.innerHTML = '<i class="fa fa-remove"></i>'
	// Append link to li
	li.appendChild(link);

	// Append li to ul
	taskList.appendChild(li);

	// Alert that task was created
	alert(`Yeiiyy, added a new task (${taskInput.value.toUpperCase()}), created ${currentTime.toLocaleString()}`);

	// Clear input field
	taskInput.value = '';

	e.preventDefault();
};

// Remove task
function removeTask(e){
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm(`Are you sure you want to delete following task: ${e.target.parentElement.parentElement.innerText}?`)){
			e.target.parentElement.parentElement.remove();			
		}
	}
}

// Clear tasks
function clearTasks(){
	// while(taskList.firstChild){
	// 	taskList.removeChild(taskList.firstChild);
	// }
	taskList.innerHTML = '';
}

// Filter Tasks
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

























