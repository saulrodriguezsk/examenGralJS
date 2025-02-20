document.addEventListener("DOMContentLoaded", updateCounters); // Ejecuta updateCounters() cuando la página haya cargado completamente

function addTask() {
  let taskInput = document.getElementById("taskInput"); // Obtiene el campo de entrada de texto
  let taskText = taskInput.value.trim(); // Obtiene el valor del input y elimina espacios en blanco
  if (taskText === "") return; // Evita agregar tareas vacías

  let li = document.createElement("li"); // Crea un nuevo elemento de lista
  let span = document.createElement("span"); // Crea un elemento <span> para contener el texto de la tarea
  span.textContent = taskText; // Asigna el texto ingresado al <span>
  li.appendChild(span); // Agrega el <span> al elemento <li>

  let completeBtn = document.createElement("button"); // Crea el botón de completar
  completeBtn.textContent = "✔"; // Asigna el texto al botón
  completeBtn.onclick = () => toggleComplete(li); // Asigna la función para marcar como completado
  li.appendChild(completeBtn); // Agrega el botón de completar al <li>

  let deleteBtn = document.createElement("button"); // Crea el botón de eliminar
  deleteBtn.textContent = "❌"; // Asigna el texto al botón
  deleteBtn.onclick = () => deleteTask(li); // Asigna la función para eliminar la tarea
  li.appendChild(deleteBtn); // Agrega el botón de eliminar al <li>

  document.getElementById("taskList").appendChild(li); // Agrega el <li> con la nueva tarea a la lista
  taskInput.value = ""; // Limpia el campo de entrada después de agregar la tarea
  updateCounters(); // Actualiza los contadores de tareas
}

function toggleComplete(taskItem) {
  taskItem.classList.toggle("completed"); // Alterna la clase "completed" para marcar/desmarcar la tarea
  updateCounters(); // Actualiza los contadores
}

function deleteTask(taskItem) {
  taskItem.remove(); // Elimina la tarea de la lista
  updateCounters(); // Actualiza los contadores después de eliminar
}

function updateCounters() {
  let tasks = document.querySelectorAll("#taskList li"); // Obtiene todas las tareas
  let completedTasks = document.querySelectorAll("#taskList .completed"); // Obtiene solo las tareas completadas

  document.getElementById("completedCount").textContent = completedTasks.length; // Muestra la cantidad de tareas completadas
  document.getElementById("incompleteCount").textContent =
    tasks.length - completedTasks.length; // Muestra la cantidad de tareas pendientes
}
