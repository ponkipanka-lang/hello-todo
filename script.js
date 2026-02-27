const addInput = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");
const result = document.getElementById("result");
const noTodo = document.getElementById("no-todo");

addInput.placeholder = "Add your 1 item";
addBtn.addEventListener("click", () => {
  const inputValue = addInput.value.trim();
  if (!inputValue) return;
  noTodo.classList.add("hidden");
  const resultLiClass = [
    "bg-warning/20",
    "rounded",
    "p-2",
    "flex",
    "justify-between",
    "items-center",
    "task-items",
  ];
  const taskItems = document.createElement("li");
  taskItems.innerHTML =
    result.children.length +
    ". " +
    inputValue +
    `<span  class="hover:text-red-500  cursor-pointer"><i  class="fas fa-trash pointer-events-none"></i></span>`;

  taskItems.classList.add(...resultLiClass);
  result.appendChild(taskItems);
  addInput.value = "";
  addInput.placeholder = `Add your ${result.children.length} item`;
});

result.addEventListener("click", (e) => {
  const dltBtn = e.target.closest("span");
  if (!dltBtn) return;
  const li = dltBtn.closest("li");
  li.remove();
  addInput.placeholder = `Add your ${result.children.length} item`;

  if (result.children.length == 1 ) {
    noTodo.classList.remove("hidden");
  }
});
addInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});
