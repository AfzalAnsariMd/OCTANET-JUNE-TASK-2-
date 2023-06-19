document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");
    const completeBtn = document.getElementById("completeBtn");
    const deleteBtn = document.getElementById("deleteBtn");
  
    addBtn.addEventListener("click", function() {
      const task = taskInput.value.trim();
      if (task !== "") {
        const li = document.createElement("li");
        li.textContent = task;
        li.innerHTML += '<button class="deleteBtn">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON" && event.target.className === "deleteBtn") {
        const li = event.target.parentNode;
        li.parentNode.removeChild(li);
      } else if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
      }
    });
  
    completeBtn.addEventListener("click", function() {
      const completedTasks = document.querySelectorAll("li.completed");
      completedTasks.forEach(function(task) {
        task.classList.remove("completed");
      });
    });
  
    deleteBtn.addEventListener("click", function() {
      const completedTasks = document.querySelectorAll("li.completed");
      completedTasks.forEach(function(task) {
        task.parentNode.removeChild(task);
      });
    });
  });
  