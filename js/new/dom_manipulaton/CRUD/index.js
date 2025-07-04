let items = [];

// Create
function create_item() {
  const value = document.getElementById("input").value.trim();
  if (value === "") {
    window.alert("Enter a valid name");
    return;
  }
  const newItem = {
    id: Date.now(),
    name: value,
  };
  items.push(newItem);
  render_single_item(newItem); // Render only the new item
  document.getElementById("input").value = ""; // Clear input
}
// Render a single item (for additions)
function render_single_item(item) {
  const itemlist = document.getElementById("item-list");
  const itemdiv = document.createElement("div");
  itemdiv.className = "item";
  itemdiv.dataset.id = item.id; // Store ID for event delegation

  const span = document.createElement("span");
  span.textContent = item.name;

  const buttonContainer = document.createElement("div");
  const editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "Edit";
  editButton.className = "edit"; // Use class instead of ID (IDs must be unique)

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.className = "delete"; // Use class instead of ID

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  itemdiv.appendChild(span);
  itemdiv.appendChild(buttonContainer);
  itemlist.appendChild(itemdiv);
}

// Initial or full render (used only when necessary, e.g., page load)
function render_items() {
  console.log("Rendering all items");
  const itemlist = document.getElementById("item-list");
  itemlist.innerHTML = ""; // Clear once
  const fragment = document.createDocumentFragment(); // Batch DOM updates
  items.forEach((item) => {
    const itemdiv = document.createElement("div");
    itemdiv.className = "item";
    itemdiv.dataset.id = item.id;

    const span = document.createElement("span");
    span.textContent = item.name;

    const buttonContainer = document.createElement("div");
    const editButton = document.createElement("input");
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.className = "delete";

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    itemdiv.appendChild(span);
    itemdiv.appendChild(buttonContainer);
    fragment.appendChild(itemdiv);
  });
  itemlist.appendChild(fragment);
}

// Update
function update_items(id) {
  const item = items.find((item) => item.id === id);
  if (!item) return;
  const newName = window.prompt("Enter the new name", item.name);
  if (newName === null || newName.trim() === "") return; // Cancel or empty input
  items = items.map((item) =>
    item.id === id ? { ...item, name: newName.trim() } : item
  );

  // Update only the affected DOM element
  const itemdiv = document.querySelector(`#item-list .item[data-id="${id}"]`);
  if (itemdiv) {
    itemdiv.querySelector("span").textContent = newName.trim();
  }
}

// Delete
function delete_items(id) {
  if (window.confirm("Are you sure you want to delete this item?")) {
    items = items.filter((item) => item.id !== id);
    // Remove only the affected DOM element
    const itemdiv = document.querySelector(`#item-list .item[data-id="${id}"]`);
    if (itemdiv) {
      itemdiv.remove();
    }
  }
}

// Event delegation for edit and delete buttons
function setupEventDelegation() {
  const itemlist = document.getElementById("item-list");
  itemlist.addEventListener("click", (event) => {
    const target = event.target;
    const itemdiv = target.closest(".item");
    if (!itemdiv) return;
    const id = parseInt(itemdiv.dataset.id, 10);
    if (target.classList.contains("edit")) {
      update_items(id);
    } else if (target.classList.contains("delete")) {
      delete_items(id);
    }
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  setupEventDelegation();
  render_items(); // Initial render for existing items
});
