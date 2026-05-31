const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const statusText = document.querySelector("#status-text");
const counterText = document.querySelector("#counter-text");
const taskList = document.querySelector("#task-list");

const filterAllButton = document.querySelector("#filter-all");
const filterActiveButton = document.querySelector("#filter-active");
const filterCompletedButton = document.querySelector("#filter-completed");

let tasks = [];
let currentFilter = "all";
let nextTaskId = 1;

function createTask(text) {
  return {
    id: nextTaskId,
    text,
    completed: false,
  };
}

function addTask(text) {
  if (text.trim() === "") return;

  const task = createTask(text);
  tasks.push(task);
  nextTaskId++;
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

function toggleTaskCompleted(taskId) {
  for (const task of tasks) {
    if (task.id === taskId) {
      task.completed = !task.completed;
    }
  }
  renderTasks();
}

function setFilter(filterName) {
  currentFilter = filterName;
  renderTasks();
}

function getVisibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function renderTasks() {
  // clear taskList
  taskList.innerHTML = "";
  // get visible tasks
  const visibleTasks = getVisibleTasks();
  // create li for each task
  for (const task of visibleTasks) {
    const li = document.createElement("li");
    li.append(task.text);
    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Uncomplete" : "Complete";
    li.append(completeButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.append(deleteButton);
    taskList.append(li);

    completeButton.addEventListener("click", () => {
      toggleTaskCompleted(task.id);
    });

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });
  }
  renderCounter();
}

function renderCounter() {
  const activeTasks = tasks.filter((task) => !task.completed);

  counterText.textContent = `${activeTasks.length} active / ${tasks.length} total`;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  addTask(text);
});

filterAllButton.addEventListener("click", () => {
  setFilter("all");
});

filterActiveButton.addEventListener("click", () => {
  setFilter("active");
});

filterCompletedButton.addEventListener("click", () => {
  setFilter("completed");
});

renderTasks();
