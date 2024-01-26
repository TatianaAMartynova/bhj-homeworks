document.addEventListener("DOMContentLoaded", function () {
    const tasksList = document.getElementById("tasks__list");
    const taskInput = document.getElementById("task__input");
    const addTaskButton = document.getElementById("tasks__add");
    const tasksForm = document.getElementById("tasks__form");
  
    loadTasks();
  
    function addTask(title) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
  
      const taskTitleDiv = document.createElement("div");
      taskTitleDiv.classList.add("task__title");
      taskTitleDiv.innerText = title;
  
      const removeButton = document.createElement("a");
      removeButton.href = "#";
      removeButton.classList.add("task__remove");
      removeButton.innerHTML = "&times;";
  
      removeButton.addEventListener("click", function () {
        taskDiv.remove();
        saveTasks();
      });
  
      taskDiv.appendChild(taskTitleDiv);
      taskDiv.appendChild(removeButton);
      tasksList.appendChild(taskDiv);
  
      taskInput.value = "";
  
      saveTasks();
    }
  
    addTaskButton.addEventListener("click", function (event) {
      event.preventDefault();
      const taskTitle = taskInput.value.trim();
      if (taskTitle !== "") {
        addTask(taskTitle);
      }
    });
  
    tasksForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const taskTitle = taskInput.value.trim();
      if (taskTitle !== "") {
        addTask(taskTitle);
      }
    });
  
    function saveTasks() {
      const tasks = tasksList.innerHTML;
      localStorage.setItem("tasks", tasks);
    }
  
    function loadTasks() {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        tasksList.innerHTML = savedTasks;
      }
    }
  });
  