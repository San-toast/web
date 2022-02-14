let form = document.getElementById("newTask");
let list = document.getElementById("theList");
let input = document.getElementById("task");

form.addEventListener("submit", function (event) {
  let newTask = document.createElement("li");
  newTask.innerText = task.value;
  list.append(newTask);
  form.reset();
});
