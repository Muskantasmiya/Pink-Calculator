// JavaScript code for managing the todo list

function addTask() {
    // Get the task input value
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        // Create a new task element
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = taskText;

        // Create a delete button for the task
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            // Remove the task when the delete button is clicked
            taskElement.remove();
        };

        // Append the delete button to the task element
        taskElement.appendChild(deleteButton);

        // Append the task element to the tasks container
        var tasksContainer = document.getElementById("tasks-container");
        tasksContainer.appendChild(taskElement);

        // Clear the input field
        taskInput.value = "";
    }
}
