type Task = {
	title: string;
	completed: boolean;
	createdAt: Date;
};

// TS Provides special properties (beyond those defined on the regular HTMLElement
// interface it also has available to it by inheritance) for manipulating unordered list elements.
const list = document.querySelector<HTMLUListElement>('#list');
// Some methods does not accept types, instead we us "as" to delcare types
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
// Selector is returning null if is not matching
const input = document.querySelector<HTMLInputElement>('#new-task-title');

form?.addEventListener('submit', e => {
	e.preventDefault();

	if (input?.value == '' || input?.value == null) return;
	// Now on, TS knows input can't be null, so we can use it
	const newTask: Task = {
		title: input.value,
		completed: false,
		createdAt: new Date(),
	};
	tasks.push(newTask);
	saveTasks();

	addListItem(newTask);
	input.value = '';
});

function addListItem(task: Task) {
	const item = document.createElement('li');
	const label = document.createElement('label');
	const checkbox = document.createElement('input');
	checkbox.addEventListener('change', () => {
		task.completed = checkbox.checked;
		saveTasks();
	});
	checkbox.type = 'checkbox';
	checkbox.checked = task.completed;
	label.append(checkbox, task.title);
	item.append(label);
	list?.append(item);
}

// Returning tasks from localStorage
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

function saveTasks() {
	localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
	// return string or null
	const taskJSON = localStorage.getItem('TASKS');
	if (taskJSON == null) return [];
	// returns Task type cause we've defined
	console.log(taskJSON);
	return JSON.parse(taskJSON);
}
