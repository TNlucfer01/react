let items = [];

// create
function create_item() {
  let value = document.getElementById("input").value.trim();
  if (value === "") {
    window.alert(" enter a valid name ");
    debugger;
    return;
  }
  items.push({
    id: Date.now(),
    name: value,
  });
  render_items();
}

// read
function render_items() {
  console.log("this is render_items");
  //clear the screen
  let itemlist = document.getElementById("item-list");
  itemlist.innerHTML = "";

  items.forEach((item) => {
    //create the child
    console.log(" this is inside the forloop" + item.name);
    const itemdiv = document.createElement("div");
    itemdiv.className = "item";
    itemdiv.innerHTML = `<span>${item.name}</span>
        <div>
        <input type='button' id='edit' value='edit' onclick={update_items(${item.id})}>
        <input type='button' id='delte' value='delete' onclick={delete_items(${item.id})}>
        
        </div>
        `;
    //display the print
    itemlist.appendChild(itemdiv);
  });
}

//update
function update_items(id) {
  //get the item
  const newfind = window.prompt(
    "enter the new name",
    items.find((item) => id === item.id).name
  );
  console.log(newfind);
  //edit the item
  items = items.map((item) => {
    return item.id === id ? { ...item, name: newfind } : item;
  });
  //render item
  render_items();
}

// delete
function delete_items(id) {
  //select the item
     if (confirm("Are you sure you want to delete this item?")) {
          items = items.filter((item) => item.id !== id);
          console.log(items)
          render_items();
        }
  
}
