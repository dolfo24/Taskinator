var formEl = document.querySelector("#task-form");
var tasksToDOEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent= "This is a new task.";
    tasksToDOEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);