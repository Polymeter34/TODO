// // Как уже говорил, код не мой, но постарался разобраться как следует.
// // Анимации не стал делать, убрал, а вот адаптив сделал.

// // Объявление переменных для взаимодействия с .html-доком
// const addTaskBtn = document.getElementById("add-button");
// const taskInput = document.getElementById("task-input");
// const taskWrap = document.querySelector(".task-wrap");
// const inputWrap = document.querySelector(".input-wrap");

// // Объявление массива для хранения данных по каждому таску,
// // проверка локального стораджа браузера на наличие данных
// let tasks = localStorage.tasks ? JSON.parse(localStorage.getItem("tasks")) : [];
// !localStorage.tasks
//   ? (tasks = [])
//   : (tasks = JSON.parse(localStorage.getItem("tasks")));

// // Создание пустого массива для хранения существующих html-блоков с тасками
// let todoItemElems = [];

// // Конструктор для данных по каждому таску
// function Task(description) {
//   this.description = description;
//   this.completed = false;
//   const elem = document.createElement("div");
//   const input = document.createElement("input");
//   input.type = "checkbox";

//   input.addEventListener("click", checkboxClickHanlder);

//   function checkboxClickHanlder(event) {}

//   function render() {
//     const template = `
//     <div class="todo-item ${this.completed ? "checked" : ""}">
//         <input onclick="completeTask(${index})" class="btn-complete" type=
//             "checkbox" ${task.completed ? "checked" : ""}>
//         <div class="description"><p class="desc-text">${
//           task.description
//         }</p></div>
//         <button onclick="deleteTask(${index})" class="btn-delete"><p class = "del-btn-text">-</p></button>
//     </div>
//     `;
//     elem.innerHTML = template;
//   }
// }

// // Функция для создания html-блока по данным из массива tasks
// const createTemplate = (task, index) => {
//   return `
//     <div class="todo-item ${task.completed ? "checked" : ""}">
//         <input onclick="completeTask(${index})" class="btn-complete" type=
//             "checkbox" ${task.completed ? "checked" : ""}>
//         <div class="description"><p class="desc-text">${
//           task.description
//         }</p></div>
//         <button onclick="deleteTask(${index})" class="btn-delete"><p class = "del-btn-text">-</p></button>
//     </div>
//     `;
// };

// // Функция для вывода выполненных тасков под активными
// const filterTasks = () => {
//   const activeTasks =
//     tasks.length && tasks.filter((item) => item.completed == false);
//   const completedTasks =
//     tasks.length && tasks.filter((item) => item.completed == true);
//   tasks = [...activeTasks, ...completedTasks];
// };

// // Функция для наполнения рэппера html-блоками тасков
// const fillHtmlList = () => {
//   // Очистка рэппера
//   taskWrap.innerHTML = "";
//   if (tasks.length > 0) {
//     filterTasks();
//     tasks.forEach((item, index) => {
//       taskWrap.innerHTML += createTemplate(item, index);
//     });
//     // Наполнение массива для
//     // хранения существующих html-блоков с тасками
//     todoItemElems = document.querySelectorAll(".todo-item");
//   }

//   if (tasks.length < 1) {
//     inputWrap.classList.add("solo");
//   } else {
//     inputWrap.classList.remove("solo");
//   }
// };

// // Вызов функции для наполнения рэппера html-блоками тасков
// fillHtmlList();

// // Функция для записи массива tasks в локал сторадж браузера
// const updateLocal = () => {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// // Функция для обработки ивентов в чекбоксах, установлен онклик в html-темплейте
// const completeTask = (index) => {
//   tasks[index].completed = !tasks[index].completed;
//   if (tasks[index].completed) {
//     todoItemElems[index].classList.add("checked");
//   } else {
//     todoItemElems[index].classList.remove("checked");
//   }
//   updateLocal();
//   fillHtmlList();
// };

// addTaskBtn.addEventListener("click", () => {
//   setTimeout(() => {
//     tasks.push(new Task(taskInput.value));
//     updateLocal();
//     fillHtmlList();
//     taskInput.value = "";
//   }, 300);
// });

// // То же самое для добавления через 'Enter' в инпуте
// taskInput.addEventListener("keyup", function (e) {
//   if (e.keyCode === 13) {
//     tasks.push(new Task(taskInput.value));
//     updateLocal();
//     fillHtmlList();
//     taskInput.value = "";
//   }
// });

// const deleteTask = (index) => {
//   todoItemElems[index].classList.add("deletion");
//   setTimeout(() => {
//     tasks.splice(index, 1);
//     updateLocal();
//     fillHtmlList();
//   }, 300);
// };

// let taskss = [];
let taskInput2, addButton, wrapper;

(function () {
  init();
})();

function init() {
  tasks = localStorage.tasks ? [] : [];
  taskInput2 = document.querySelector("#task-input");
  addButton = document.querySelector("#add-button");
  taskInput2.addEventListener("keydown", inputEnterHanlder);
  addButton.addEventListener("click", addButtonClickHandler);

  function inputEnterHanlder({ target }) {
    console.log(target.value);
  }

  function addButtonClickHandler() {
    console.log("Click");
    new Task1("adsd");
  }
}

function Task1(desc) {
    this.desc = desc;
    this.completed = false;
    this.wrapper = document.createElement("div");
    this.wrapper.className = "task";
    setup();

  function setup() {
    this.wrapper.innerText = Date.now();
    this.wrapper.addEventListener("click", onClickHandler.bind(this));
    mount();
  }

  function onClickHandler() {
    unmount();
  }

  function mount() {
    document.querySelector(".task-wrap").appendChild(this.wrapper);
  }

  function unmount() {
    document.querySelector(".task-wrap").removeChild(this.wrapper);
  }
}
