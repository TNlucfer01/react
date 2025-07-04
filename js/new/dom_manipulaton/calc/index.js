let a, b;
//geting the value from the input tag

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function divide(a, b) {
  return a * b;
}
function multiple(a, b) {
  return a / b;
}

function handling_buttons() {}

function print_key(event) {
  console.log("keyPressed", event.key);
  if ((event.key = "Enter")) {
    remove();
  }
}

 document.getElementById("exp1").addEventListener("keydown", print_key);
  


function remove() {
  let operator = document.getElementById("exp");
  document.removeEventListener("keydown", print_key);
}




// let button=document.getElementById("button")
// let a =document.getElementById("message")
// button.addEventListener("click",function(){
//     button.style.background="blue";
//     a.innerText="mouse entered";
// })