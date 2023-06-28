let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("input-task");

function addTask() {
    if (taskInput.value !== "") {
        taskList.insertAdjacentHTML("beforeend", `<li><input type="checkbox" onclick="this.nextElementSibling.classList.toggle('completed')">
<span class="task">${taskInput.value}</span>
<button class="delete-btn" onclick="return this.parentNode.remove()">X</button></li>`);
        taskInput.value = '';
    }
}

document.getElementById("add-task-button").addEventListener("click", function() { addTask(); });

window.onload = function () {
    if (localStorage.getItem("taskListContent")) {
        taskList.innerHTML = localStorage.getItem("taskListContent");
    }
    let completedTask = document.getElementsByClassName("completed");
    for (let i = 0; i < completedTask.length; i++) {
        if (completedTask[i].type === "checkbox" && completedTask[i].className === "completed"){
            completedTask[i].checked = true;
        }
    }
}

function saveToLocalStorage() {
    localStorage.clear()
    let taskListContent= taskList.innerHTML;
    localStorage.setItem("taskListContent", taskListContent);
}

window.addEventListener("click", function () { saveToLocalStorage(); });