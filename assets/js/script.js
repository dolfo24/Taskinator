var buttonEl = document.querySelector("#save-task");
var tasksToDOEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent= "This is a new task.";
    tasksToDOEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);