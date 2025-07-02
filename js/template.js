import {add}  from "./imports_exports.js/exports.js"
console.log(`hello everyone this is ${1+3} \n `);
//use the \  for the additon of  the `\ in hte string 
console.log(`this is \` back tick and 
    this is \$ dollar symbol`);
// to escape this 
console.log(`this is \` back tick and \
    this is \$ dollar symbol`)
// we can even use code inside the template literals 

//behves like the paragrapgh 
console.log(` this is ${
  add(1,3)
}`);
export * from String;

console.log(`hello ${"hello"}`);