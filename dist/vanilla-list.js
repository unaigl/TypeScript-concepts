// TS Provides special properties (beyond those defined on the regular HTMLElement 
// interface it also has available to it by inheritance) for manipulating unordered list elements.
var list = document.querySelector("#list");
// Some methods does not accept types, instead we us "as" to delcare types
var form = document.getElementById("new-task-form");
// Selector is returning null if is not matching
var input = document.querySelector("#new-task-title");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    // Now on, TS knows input can't be null, so we can use it
    var newTask = {
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(newTask);
    saveTasks();
    addListItem(newTask);
    input.value = "";
});
function addListItem(task) {
    var item = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        saveTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
}
// Returning tasks from localStorage
var tasks = loadTasks();
tasks.forEach(addListItem);
function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
}
function loadTasks() {
    // return string or null
    var taskJSON = localStorage.getItem("TASKS");
    if (taskJSON == null)
        return [];
    // returns Task type cause we've defined
    console.log(taskJSON);
    return JSON.parse(taskJSON);
}
