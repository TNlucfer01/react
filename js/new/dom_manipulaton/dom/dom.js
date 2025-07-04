function add_button() {
  document.getElementById("head").innerHTML +=
    "<h1> hi </h1><input value ='change_button' type ='button'>";
}

function remove_button() {
  document.getElementById("head").innerHTML -=
    "<h1> hi </h1><input value ='change_button' type ='button'>";
}
function change_color() {
  document.getElementById("main").classList.add("shadow_button");
}
function change_footer() {
  let child = document.createElement("div");
  child.textContent = " contact me @ whenever you want";
  let a = document.getElementById("foot");
  document.body.insertBefore(child, a);
}

function add_attributes() {
  let a = document.getElementById("value");
  console.log("this is value" + a);
  document.getElementById("foot").setAttribute(attributes, value);
}

function remove_attributes(attributes) {
  document.getElementById("foot").removeAttribute(attributes);
}

function get_attributes(attributes) {
  let a = document.getElementById("foot").getAttribute(attributes);
  console.log(a);
  document.getElementById("foot").innerHTML += a;
}
