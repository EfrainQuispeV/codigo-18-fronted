// Variables para form e input
const form = document.querySelector("#form");
const inputTask = document.querySelector("#input-task");
const error = document.querySelector("#error");
const containerTasks = document.querySelector("#container-tasks");
const modal = document.querySelector("#modal");
const inputEditTask = document.querySelector("#input-edit-task");

// cuando iniciemos vamos a colocar la clase hidden
modal.classList.add("hidden");

// Si quiero obtener algo de localStorage y eso no existe este retorna null
// Pasa que esta variable puede un string o un null
const validateTasksFromLocalStorage = localStorage.getItem("tasks");
let tasks = validateTasksFromLocalStorage
  ? [...JSON.parse(validateTasksFromLocalStorage)]
  : [];
function validateIfInputIsEmpty() {
  if (inputTask.value === "") {
    inputTask.classList.add("border", "border-red-500");
    error.textContent = "Debe completar este campo";
    return false;
  } else {
    inputTask.classList.remove("border", "border-red-500");
    error.textContent = "";
    return true;
  }
}
function renderInnerTask(task) {
  const taskCreated = `
    <p>${task.text}</p>
    <div class="flex gap-5">
      <button onclick="checkTask(${task.id})">✅</button>
      <button onclick="editTaskWithModal(${task.id})">✏️</button>
      <button onclick="deleteTask(${task.id})">🗑️</button>
    </div>
  `;
  const taksDone = `
    <p class="line-through italic font-thin">${task.text}</p>
  `;
  return task.status === 1 ? taskCreated : taksDone;
}
function saveTasksInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
inputTask.onkeyup = () => validateIfInputIsEmpty();
// Vamos a capturar el evento onsubmit de form
/**
 * Como recomendacion, es bueno usar el nombre event o e
 *
 * Estados
 * 1 = creado
 * 2 = terminado
 * 9 = eliminado
 */
form.onsubmit = (event) => {
  // evitar que se recargue la pagina
  event.preventDefault();
  // Primero vamos a validar que el input este lleno
  if (!validateIfInputIsEmpty()) return;
  // Vamos a crear el objeto de tara
  const task = {
    id: tasks.length + 1,
    text: inputTask.value,
    status: 1,
    created_at: new Date(),
  };
  tasks.push(task);
  // Limpiar el input
  inputTask.value = "";
  // guardar en localStorage
  saveTasksInLocalStorage();
  // vas a hacer el render de las tareas
  renderTasks();
};
function checkTask(id) {
  // Primero estamos actualizando el item del array
  const task = tasks.find((item) => item.id === id);
  task.status = 2;
  saveTasksInLocalStorage();
  // actualizar la interface
  cancelEdit(id);
}
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  // guardar en localStorage
  saveTasksInLocalStorage();
  // render para que vuelva a pintar las tareas
  renderTasks();
}
function cancelEdit(id) {
  const taskContainer = document.querySelector(`#task-${id}`);
  taskContainer.innerHTML = "";
  // Como tenemos el id de la tarea puedo buscar el array
  const task = tasks.find((item) => item.id === id);
  taskContainer.innerHTML = renderInnerTask(task);
}

function closeModal() {
  modal.classList.add("hidden");
}

function updateTask(id) {
  const updatedInputTask = document.querySelector(`#input-task-${id}`);
  if (updatedInputTask.value === "") {
    updatedInputTask.classList.add("border-red-500");
    return;
  } else {
    updatedInputTask.classList.remove("border-red-500");
  }
  const task = tasks.find((item) => item.id === id);
  // Primero actualizamos el valor de task.text
  task.text = updatedInputTask.value;
  // Hay que actualizar localStorage
  saveTasksInLocalStorage();
  cancelEdit(id);
}

function editTaskWithModal(id) {
  modal.classList.remove("hidden");
  // buscar a la tarea
  const task = tasks.find((item) => item.id === id);
  inputEditTask.value = task.text;
  inputEditTask.focus();
}

function editTask(id) {
  const taskContainer = document.querySelector(`#task-${id}`);
  taskContainer.innerHTML = "";
  // Ahora vamos a reemplazar ese html por uno que tenga un input y dos botones
  const html = `
    <div class="flex justify-between w-full items-center gap-3">
      <div class="flex-1">
        <input type="text" id="input-task-${id}" class="outline-none px-4 py-2 border rounded-md w-full" placeholder="Editar tarea" />
      </div>
      <div class="flex gap-5">
        <button onclick="updateTask(${id})">💾</button>
        <button onclick="cancelEdit(${id})">❌</button>
      </div>
    </div>
  `;
  taskContainer.innerHTML = html;
}
function renderTasks() {
  // Paso 1: Limpiar el container
  containerTasks.innerHTML = "";
  // Que variable vamos a usar para lista las tareas
  // Paso 2: Iterar a tasks
  tasks.forEach((task) => {
    // Cuando estamos iterando queremos adicionar elemento a containerTasks
    // operador de adicion +=
    // `String: ${variable}` Template String
    containerTasks.innerHTML += `
      <div class="flex justify-between px-4 mb-3 py-3 bg-white rounded-md" id="task-${
        task.id
      }">
        ${renderInnerTask(task)}
      </div>`;
  });
}
renderTasks();