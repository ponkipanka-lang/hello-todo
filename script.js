const addInput = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");
const result = document.getElementById("result");
const noTodo = document.getElementById("no-todo");
let count = 1;
addInput.placeholder = "Add your 1 item";
addBtn.addEventListener("click", () => {
  const inputValue = addInput.value.trim();
  if (!inputValue) return;
  noTodo.classList.add("hidden");
  const resultLiClass = ["bg-warning/20", "rounded", "p-2"];
  const taskItems = document.createElement("li");
  taskItems.innerHTML = count + ". " + inputValue;
  alert(`Item ${count} added successfully`);
  count++;

  taskItems.classList.add(...resultLiClass);
  result.appendChild(taskItems);
  addInput.value = "";
  addInput.placeholder = `Add your ${count} item`;
});

addInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});

