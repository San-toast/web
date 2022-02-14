let list = document.querySelector(".theList");
let task = document.querySelector(".task");
let add = document.querySelector(".add");

add.addEventListener("click", () => {
  let newTask = document.createElement("li");
  newTask.innerText = task.value;
  theList.append(newTask);
});
