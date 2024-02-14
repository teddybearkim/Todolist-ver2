let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let taskValue = taskInput.value;
  let task = {
    content: taskValue,
    isComplete: false,
    id: randomIdGenerate(),
  };
  taskList.push(task);
  taskInput.value = "";
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete) {
      resultHTML += `<div class="task">
        <div class="task-done">${taskList[i].content}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')" class="btn-click">Return</button>
          <button onclick="deleteTask('${taskList[i].id}')" class="btn-click">Delete</button>
        </div>
      </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${taskList[i].content}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')" class="btn-click">Check</button>
          <button onclick="deleteTask('${taskList[i].id}')" class="btn-click">Delete</button>
        </div>
      </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function deleteTask(id) {
  taskList = taskList.filter(task => task.id !== id);
  render();
  console.log(taskList);
}

function randomIdGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}